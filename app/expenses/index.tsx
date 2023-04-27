import { StyleSheet, View, Text, ScrollView, useColorScheme } from "react-native";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { ExpensesButton } from "../../components/ExpensesButton";
import { LinkButton } from "../../components/LinkButton";
import {
    faBed,
    faPlaneUp,
    faSun,
} from "@fortawesome/free-solid-svg-icons";
import { loadInitialImages } from "../../data/images";
import { faAviato } from "@fortawesome/free-brands-svg-icons";
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
        photo: {
            flexDirection: "column",
            rowGap: 8,
        },

    });

    return (
        <SafeAreaProvider >
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                <View style={{paddingBottom:32}}> 
                    <Text style= {{color: '#3B4949', fontWeight: '600', fontSize: 20, lineHeight: 27}}>1487€ remaining</Text>
                    <Text style= {{color: '#3B4949', fontWeight: '400', fontSize: 16, lineHeight: 22}}>3013€ spent out of 4500€</Text>
                </View>
                <View style={[styles.photo, { paddingBottom:32 }]}>
                    {/* Placeholders for other parts of the app.
                        We will be dead by the time we finish implementing the map. */}
                    <Text style= {{color: '#3B4949', fontWeight: '600', fontSize: 16, lineHeight: 22}}>Latest expenses</Text>
                    <ExpensesButton title={"Sunscreen"} icon={faSun} cost={15.50} />
                    <ExpensesButton title={"Hotel"} icon={faBed} cost={2500} />
                    <ExpensesButton title={"Flight"} icon={faPlaneUp} cost={500} />
                </View>
                <View style={styles.photo}>
                    {/* Placeholders for other parts of the app.
                        We will be dead by the time we finish implementing the map. */}
                    <Text style= {{color: '#3B4949', fontWeight: '600', fontSize: 16, lineHeight: 22}}>Other</Text>
                    <LinkButton title={"Budget settings"} newNavigation={"/expenses"} icon={faGear} />
                </View>
            </ScrollView>

        </SafeAreaProvider>
    );
}

