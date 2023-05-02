import { StyleSheet, View, Image, Text, ScrollView, useColorScheme } from "react-native";
import { EdgeInsets, SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { LinkButton } from "../components/LinkButton";
import {
    faCamera,
    faLocationPin,
    faMoneyBill,
    faNoteSticky,
} from "@fortawesome/free-solid-svg-icons";
import { loadInitialImages } from "../data/images";
import { loadInitialNotes } from "../data/notes";
import { getCurrentPOIs, loadInitialPOIs, POIs } from "../data/pois";
import { loadInitialExpenses } from "../data/expenses";
import { POIsButton } from "../components/POIsButton";
import { useState } from "react";
import { Header } from "../components/Header";

export default function App() {
    loadInitialImages();
    loadInitialNotes();
    loadInitialPOIs();
    loadInitialExpenses();

    const insets: EdgeInsets = useSafeAreaInsets();
    const isLightMode: boolean = useColorScheme() === "light";
    const [POIsArray] = useState<POIs[]>(getCurrentPOIs());

    const styles = StyleSheet.create({
        photo: {
            width: "100%",
            height: 200,
            borderRadius: 8,
            borderWidth: 1,
            borderColor: "#60BBB6",
        },
        view: {
            marginBottom: 16,
        },
        scrollView: {
            marginHorizontal: 16,
            marginTop: 16,
            borderRadius: 8,
        },
        buttonsView: {
            marginBottom: insets.bottom,
        },
        column: {
            flexDirection: "column",
            rowGap: 8,
        },
        title: {
            fontSize: 16,
            fontWeight: "600",
            color: isLightMode ? "#3B4949" : "#fff",
            marginBottom: 4,
        },
    });

    return (
        <SafeAreaProvider>
            <Header
                title={"TravelMate"}
                hasAddButton={true}
                addFunction={() => alert("Not implemented yet.")}
            />
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                <View style={styles.view}>
                    <Text style={styles.title}>Featured photo</Text>
                    <Image style={styles.photo} source={require("../assets/images/one.png")} />
                </View>
                <View style={styles.view}>
                    <Text style={styles.title}>Featured POI</Text>
                    <POIsButton
                        date={POIsArray[2].date}
                        icon={POIsArray[2].icon}
                        title={POIsArray[2].title}
                        image={POIsArray[2].image}
                        newNavigation={"pois/poi2"}
                        key={"poi2"}
                    />
                </View>
                <View style={styles.buttonsView}>
                    <Text style={styles.title}>Main options</Text>
                    <View style={styles.column}>
                        <LinkButton title={"Photos"} newNavigation={"/photos"} icon={faCamera} />
                        <LinkButton title={"Notes"} newNavigation={"/notes"} icon={faNoteSticky} />
                        <LinkButton title={"POIs"} newNavigation={"/pois"} icon={faLocationPin} />
                        <LinkButton
                            title={"Expenses"}
                            newNavigation={"/expenses"}
                            icon={faMoneyBill}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaProvider>
    );
}
