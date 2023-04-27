import { StyleSheet, View, Text, ScrollView, useColorScheme } from "react-native";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { ExpensesButton } from "../../components/ExpensesButton";
import { LinkButton } from "../../components/LinkButton";
import { faBed, faPlaneUp, faSun } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";

export default function () {
    const colorScheme = useColorScheme(); // Color mode (light/dark)
    const insets = useSafeAreaInsets(); // SafeAreaView dimensions

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
        subtitle: {
            color: "#3B4949",
            fontWeight: "600",
            fontSize: 16,
            lineHeight: 22,
        },
        marginBottom: {
            marginBottom: 32,
        },
    });

    return (
        <SafeAreaProvider>
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                {/* Summary */}
                <View style={styles.marginBottom}>
                    <Text
                        style={{
                            color: "#3B4949",
                            fontWeight: "600",
                            fontSize: 20,
                            lineHeight: 27,
                        }}
                    >
                        1484,50€ remaining
                    </Text>
                    <Text
                        style={{
                            color: "#3B4949",
                            fontWeight: "400",
                            fontSize: 16,
                            lineHeight: 22,
                        }}
                    >
                        3015,50€ spent out of 4500,00€
                    </Text>
                </View>

                {/* Latest expenses */}
                <View style={[styles.rowContainer, styles.marginBottom]}>
                    <Text style={styles.subtitle}>Latest expenses</Text>
                    <ExpensesButton title={"Sunscreen"} icon={faSun} cost={15.5} />
                    <ExpensesButton title={"Hotel"} icon={faBed} cost={2500} />
                    <ExpensesButton title={"Flight"} icon={faPlaneUp} cost={500} />
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
