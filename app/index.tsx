import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { LinkButton } from "../components/LinkButton";
import {
    faCamera,
    faLocationPin,
    faMoneyBill,
    faNoteSticky,
} from "@fortawesome/free-solid-svg-icons";
import { loadInitialImages } from "../data/images";
import { loadInitialNotes } from "../data/notes";
import { loadInitialPOIs } from "../data/pois";
import { loadInitialExpenses } from "../data/expenses";

export default function App() {
    loadInitialImages();
    loadInitialNotes();
    loadInitialPOIs();
    loadInitialExpenses();

    return (
        <SafeAreaProvider>
            <StatusBar style="auto" />
            <SafeAreaView style={{ marginHorizontal: 16, marginTop: 16 }}>
                <View style={styles.view}>
                    {/* Placeholders for other parts of the app.
                        We will be dead by the time we finish implementing the map. */}
                    <LinkButton title={"Photos"} newNavigation={"/photos"} icon={faCamera} />
                    <LinkButton title={"Notes"} newNavigation={"/notes"} icon={faNoteSticky} />
                    <LinkButton title={"POIs"} newNavigation={"/pois"} icon={faLocationPin} />
                    <LinkButton title={"Expenses"} newNavigation={"/expenses"} icon={faMoneyBill} />
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    view: {
        flexDirection: "column",
        rowGap: 8,
    },
});
