import { StyleSheet, View, Text, ScrollView, useColorScheme, Button, FlatList } from "react-native";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { ExpensesButton } from "../../components/ExpensesButton";
import { LinkButton } from "../../components/LinkButton";
import {
    faCoins,
    faDollar,
    faDollarSign,
    faGear,
    faMoneyBill,
    faMoneyBill1Wave,
    faMoneyBillTransfer,
    faSackDollar,
    faWallet,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { deleteExpenses, getCurrentExpenses } from "../../data/expenses";
import { CircularProgress } from "../../components/CircularProgess";

import { AddExpenseModal } from "../../components/ModalExpenses";

export default function () {
    const colorScheme = useColorScheme(); // Color mode (light/dark)
    const insets = useSafeAreaInsets(); // SafeAreaView dimensions

    const [ExpensesArray, setExpensesArray] = useState(getCurrentExpenses());

    const percentage = 67;
    const circumference = 2 * Math.PI * 36;

    const [modalVisible, setModalVisible] = useState(false);

    const handleExpenseData = (data) => {
        setExpensesArray(
            ExpensesArray.concat({
                date: data.date,
                cost: parseFloat(data.value),
                title: data.title,
                icon: faWallet,
            })
        );
    };

    const sumExpenses = ExpensesArray.reduce(
        (accumulator, currentValue) => accumulator + currentValue.cost,
        0
    );

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
            color: colorScheme === "light" ? "#3B4949" : "#fff",
            fontWeight: "600",
            fontSize: 20,
            lineHeight: 27,
        },
        summarySubtitle: {
            color: colorScheme === "light" ? "#3B4949" : "#fff",
            fontSize: 16,
            lineHeight: 22,
        },
        subtitle: {
            color: colorScheme === "light" ? "#3B4949" : "#fff",
            fontWeight: "600",
            fontSize: 16,
            lineHeight: 22,
        },
        marginBottom: {
            marginBottom: 32,
        },
        container: {
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 16,
            paddingVertical: 8,
        },
        view: {
            flexDirection: "column",
            rowGap: 8,
            marginBottom: insets.bottom,
        },
    });

    return (
        <SafeAreaProvider>
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                {/* Summary */}
                <View style={styles.container}>
                    <View style={{ alignSelf: "flex-start" }}>
                        <Text style={styles.summaryTitle}>1484,50€ remaining</Text>
                        <Text style={styles.summarySubtitle}>
                            {" "}
                            {sumExpenses}€ spent out of 4500,00€
                        </Text>
                    </View>
                    <View style={{ alignItems: "flex-end" }}>
                        <CircularProgress percentage={percentage} circumference={circumference} />
                    </View>
                </View>
                {/* Latest expenses */}

                <View style={[styles.rowContainer, styles.marginBottom]}>
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
                                        key={"expense" + index}
                                        newNavigation={"expenses/expense?id=" + index}
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

                    <Button
                        title={"TEST: Delete the first expense"}
                        onPress={() => {
                            setExpensesArray(getCurrentExpenses().slice(1));
                            deleteExpenses(0);
                        }}
                    />
                </View>

                <View>
                    <Button title="Adicionar Despesa" onPress={() => setModalVisible(true)} />
                    <AddExpenseModal
                        visible={modalVisible}
                        onClose={() => setModalVisible(false)}
                        onSave={handleExpenseData}
                    />
                </View>

                {/* Other */}
                <View style={[styles.rowContainer, { marginBottom: insets.bottom }]}>
                    <Text style={styles.subtitle}>Other</Text>
                    <LinkButton
                        title={"Budget settings"}
                        newNavigation={"/expenses/settings"}
                        icon={faGear}
                    />
                </View>
            </ScrollView>
        </SafeAreaProvider>
    );
}
