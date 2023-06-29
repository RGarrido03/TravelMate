import { StyleSheet, View, Text, ScrollView, useColorScheme } from "react-native";
import { EdgeInsets, SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { ExpensesButton } from "../../components/ExpensesButton";
import { LinkButton } from "../../components/LinkButton";
import { faGear, faWallet } from "@fortawesome/free-solid-svg-icons";
import { useCallback, useState } from "react";
import {
    Expenses,
    loadExpensesByKey,
    addExpenses,
    deleteExpenses,
    editExpenses,
} from "../../data/expenses";
import { CircularProgress } from "../../components/CircularProgess";
import { BudgetModal } from "../../components/ModalBudget";
import { AddExpenseModal } from "../../components/ModalExpenses";
import { Header } from "../../components/Header";
import { useFocusEffect, useLocalSearchParams } from "expo-router";
import { editBudget, getCurrentTrips } from "../../data/trips";

export default function () {
    const isLightMode: boolean = useColorScheme() === "light";
    const insets: EdgeInsets = useSafeAreaInsets(); // SafeAreaView dimensions

    const searchParams: Partial<URLSearchParams> = useLocalSearchParams();
    const tripID: number = searchParams?.["id"] ? parseInt(searchParams["id"]) : 0;
    const [ExpensesArray, setExpensesArray] = useState<Expenses[]>(loadExpensesByKey(tripID));

    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [modalBudgetVisible, setBudgetVisible] = useState<boolean>(false);

    const [isAdd, setIsAdd] = useState<boolean>(true);

    const [id, setId] = useState<number>(-1);

    const [title, setTitle] = useState<string>("");
    const [value, setValue] = useState<string>("");
    const [date, setDate] = useState<string>("");

    const handleAddExpense = (data): void => {
        const newExpense: Expenses = {
            date: data.date,
            cost: parseFloat(data.value),
            title: data.title,
            icon: faWallet,
        };

        addExpenses(tripID, newExpense);
        setExpensesArray(loadExpensesByKey(tripID));
        setExpenses(expenses + parseFloat(data.value));
    };

    const handleEditExpense = (data): void => {
        const newExpense: Expenses = {
            date: data.date,
            cost: parseFloat(data.value),
            title: data.title,
            icon: faWallet,
        };
        setExpenses(expenses - ExpensesArray[id].cost + parseFloat(data.value));
        editExpenses(tripID, id, newExpense);
        setExpensesArray(loadExpensesByKey(tripID));
    };

    const handleDeleteExpense = (): void => {
        deleteExpenses(tripID, id);
        setExpensesArray(loadExpensesByKey(tripID));
        setExpenses(expenses - ExpensesArray[id].cost);
    };

    useFocusEffect(
        useCallback((): void => {
            setExpensesArray(loadExpensesByKey(tripID).slice());
        }, []) // Empty callback to avoid infinite loop
    );

    const [budget, setBudget] = useState<string>(
        getCurrentTrips()[tripID]?.budget?.toString() || "Not found"
    );

    const handleBudget = (data): void => {
        editBudget(tripID, parseFloat(data.budget));
        setBudget(getCurrentTrips()[tripID]?.budget?.toString() || "0");
    };

    const circumference: number = 2 * Math.PI * 36;

    const [expenses, setExpenses] = useState<number>(
        ExpensesArray.reduce(
            (accumulator: number, currentValue: Expenses) => accumulator + currentValue.cost,
            0
        )
    );
    const percentage: number = Math.min(Math.floor((expenses * 100) / parseFloat(budget)), 100);

    const styles = StyleSheet.create({
        scrollView: {
            borderRadius: 8,
            marginHorizontal: 16,
            marginTop: 16,
            overflow: "hidden",
        },
        rowContainer: {
            flexDirection: "column",
            rowGap: 8,
        },
        summaryTitle: {
            color: isLightMode ? "#3B4949" : "#fff",
            fontWeight: "600",
            fontSize: 20,
            lineHeight: 27,
        },
        summarySubtitle: {
            color: isLightMode ? "#3B4949" : "#fff",
            fontSize: 16,
            lineHeight: 22,
        },
        subtitle: {
            color: isLightMode ? "#3B4949" : "#fff",
            fontWeight: "600",
            fontSize: 16,
        },
        container: {
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 16,
        },
        view: {
            flexDirection: "column",
            rowGap: 8,
            marginBottom: 32,
        },
    });

    return (
        <SafeAreaProvider>
            <Header
                title={"Expenses"}
                hasBackButton={true}
                hasAddButton={true}
                addFunction={() => {
                    setIsAdd(true);
                    setTitle("");
                    setValue("");
                    setDate("");
                    setModalVisible(true);
                }}
            />
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                {/* Summary */}
                <View style={styles.container}>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.summaryTitle}>
                            {(parseFloat(budget) - expenses).toLocaleString("pt-PT", {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                            })}
                            € remaining
                        </Text>
                        <Text style={styles.summarySubtitle}>
                            {expenses.toLocaleString("pt-PT", {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                            })}
                            € spent out of{" "}
                            {parseFloat(budget).toLocaleString("pt-PT", {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                            })}
                            €
                        </Text>
                    </View>
                    <CircularProgress percentage={percentage} circumference={circumference} />
                </View>

                {/* Latest expenses */}
                <View style={styles.rowContainer}>
                    <Text style={styles.subtitle}>Latest expenses</Text>
                    {ExpensesArray.length > 0 ? (
                        <View style={styles.view}>
                            {ExpensesArray.map((item: any, index: number) => {
                                return (
                                    <ExpensesButton
                                        date={item.date}
                                        icon={item.icon}
                                        title={item.title}
                                        cost={item.cost}
                                        key={index}
                                        onClick={() => {
                                            setIsAdd(false);
                                            setTitle(item.title);
                                            setDate(item.date);
                                            setValue(item.cost.toString());
                                            setId(index);
                                            setModalVisible(true);
                                        }}
                                    />
                                );
                            })}
                        </View>
                    ) : (
                        <View style={{ alignItems: "center", justifyContent: "center" }}>
                            <Text style={{ fontWeight: "bold", fontSize: 20, marginBottom: 8 }}>
                                No Expenses.
                            </Text>
                            <Text style={{ fontWeight: "300" }}>
                                Add one by pressing the + icon.
                            </Text>
                        </View>
                    )}
                </View>

                <AddExpenseModal
                    visible={modalVisible}
                    onClose={() => setModalVisible(false)}
                    onDelete={!isAdd && handleDeleteExpense}
                    onAdd={isAdd && handleAddExpense}
                    isAdd={isAdd}
                    isEdit={!isAdd}
                    onEdit={!isAdd && handleEditExpense}
                    title={title}
                    value={value}
                    date={date}
                    setTitle={setTitle}
                    setValue={setValue}
                    setDate={setDate}
                />

                <BudgetModal
                    visible={modalBudgetVisible}
                    onClose={() => setBudgetVisible(false)}
                    onSave={handleBudget}
                    budget={budget}
                    setBudget={setBudget}
                />
                {/* Other */}
                <View style={[styles.rowContainer, { marginBottom: insets.bottom }]}>
                    <Text style={styles.subtitle}>Other</Text>
                    <LinkButton
                        title={"Budget settings"}
                        icon={faGear}
                        onClick={() => {
                            setBudgetVisible(true);
                        }}
                    />
                </View>
            </ScrollView>
        </SafeAreaProvider>
    );
}
