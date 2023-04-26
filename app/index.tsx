import { View, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { LinkButton } from "../components/LinkButton";
import {
    faCamera,
    faLocationPin,
    faMoneyBill,
    faNoteSticky,
} from "@fortawesome/free-solid-svg-icons";

export default function App() {
    return (
        <SafeAreaProvider>
            <StatusBar style="auto" />
            <SafeAreaView style={{ marginHorizontal: 16, marginTop: 16 }}>
                <View style={styles.photo}>
                    <LinkButton
                        title={"Photos"}
                        newNavigation={"/photos"}
                        icon={faCamera}
                    />
                    <LinkButton
                        title={"Notes"}
                        newNavigation={"/notes"}
                        icon={faNoteSticky}
                    />
                    <LinkButton
                        title={"POIs"}
                        newNavigation={"/pois"}
                        icon={faLocationPin}
                    />
                    <LinkButton
                        title={"Expenses"}
                        newNavigation={"/expenses"}
                        icon={faMoneyBill}
                    />
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    photo: {
        flexDirection: "column",
        rowGap: 8,
    },
});
