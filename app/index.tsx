import { StyleSheet, View, Image, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { LinkButton } from "../components/LinkButton";
import {
    faCamera,
    faLocationPin,
    faMoneyBill,
    faNoteSticky,
} from "@fortawesome/free-solid-svg-icons";
import { loadInitialImages } from "../data/images";
import { loadInitialNotes } from "../data/notes";
import { getCurrentPOIs, loadInitialPOIs } from "../data/pois";
import { loadInitialExpenses } from "../data/expenses";
import { POIsButton } from "../components/POIsButton";
import { useState } from "react";

export default function App() {
    loadInitialImages();
    loadInitialNotes();
    loadInitialPOIs();
    loadInitialExpenses();
    
    const insets = useSafeAreaInsets();
    const [POIsArray] = useState(getCurrentPOIs());

    const styles = StyleSheet.create({
    photo: {
        width: "100%",
        height: "100%",
        borderRadius: 8,
    },
    photoView: {
        // Fix photo size bug
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
        paddingBottom: insets.bottom + 8 + 20 + 16,
    },
    container: {
        position: "absolute",
        width: "100%",
        height: 191.5,
        backgroundColor: "#60BBB6",
        borderWidth: 1,
        borderColor: "#60BBB6",
        borderRadius: 8,
        boxSizing: "border-box",
        },
    view: {
        flexDirection: "column",
        rowGap: 8,
        marginBottom: insets.bottom,
    },
    })

    return (
        <SafeAreaProvider>
            <StatusBar style="auto" />
            <SafeAreaView style={{ marginHorizontal: 16, marginTop: 16 }}>
                <View style={styles.container}>
                    <Image style={styles.photo} source={require("../assets/images/one.png")} />
                </View>
                <View style={styles.view}>
                    <Text style={{ marginBottom: 205 }} />
                    <POIsButton
                        date={POIsArray[2].date}
                        icon={POIsArray[2].icon}
                        title={POIsArray[2].title}
                        image={POIsArray[2].image}
                        newNavigation={"pois/poi2"}
                        key={"poi2"}
                    />
                </View>
                <View style={styles.view}>               
                    {/* Placeholders for other parts of the app.
                        We will be dead by the time we finish implementing the map. */}
                    <Text style={{ marginBottom: 15 }} />
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
