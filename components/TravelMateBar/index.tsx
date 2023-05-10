import {
    StyleSheet,
    View,
    Text,
    useColorScheme,
    Image,
    Platform,
    TouchableOpacity,
} from "react-native";
import { EdgeInsets, useSafeAreaInsets } from "react-native-safe-area-context";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faDisplay, faUser } from "@fortawesome/free-solid-svg-icons";
import { BlurView } from "expo-blur";
import React from "react";

export default function (): JSX.Element {
    const isLightMode: boolean = useColorScheme() === "light";
    const insets: EdgeInsets = useSafeAreaInsets(); // SafeAreaView dimensions

    const styles = StyleSheet.create({
        view: {
            marginTop: insets.top + 16,
            marginBottom: 16,
            marginHorizontal: 16,
            flexDirection: "row",
            columnGap: 16,
            alignItems: "center",
            borderRadius: 50,
            borderColor: isLightMode ? "#BDF4F1" : "#60BBB6",
            borderWidth: 1,
            paddingHorizontal: 16,
            paddingVertical: 14,
            overflow: "hidden",
            backgroundColor: isLightMode ? "#ffffff77" : "#00000077",
        },
        logo: {
            width: 32,
            height: 32,
        },
        title: {
            fontWeight: "bold",
            fontSize: 24,
            color: isLightMode ? "#000" : "#fff",
            flex: 1,
        },
        roundShape: {
            backgroundColor: isLightMode ? "#ffffffcc" : "#3B494977",
            height: 32,
            width: 32,
            borderRadius: 16, // it will be height/2
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 1,
            borderColor: isLightMode ? "#60BBB6" : "#BDF4F1",
            marginRight: Platform.OS === "web" ? 0 : -16,
        },
    });

    return (
        <BlurView
            style={styles.view}
            blurReductionFactor={2}
            intensity={64}
            tint={isLightMode ? "light" : "dark"}
        >
            <Image source={require("../../assets/logo-512.png")} style={styles.logo} />
            <Text style={styles.title}>TravelMate</Text>
            <TouchableOpacity style={styles.roundShape} >
                <FontAwesomeIcon icon={faUser} size={16} color={"#60BBB6"} />
            </TouchableOpacity>
        </BlurView>
    );
}
