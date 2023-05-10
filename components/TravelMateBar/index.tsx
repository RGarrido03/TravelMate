import { StyleSheet, View, Text, ScrollView, useColorScheme, Image } from "react-native";
import { EdgeInsets, SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPersonRifle, faUser } from "@fortawesome/free-solid-svg-icons";


export default function App() {

    const isLightMode: boolean = useColorScheme() === "light";
    const insets: EdgeInsets = useSafeAreaInsets(); // SafeAreaView dimensions

    const styles= StyleSheet.create({
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
        summarySubtitle: {
            color: isLightMode ? "#3B4949" : "#fff",
            fontSize: 20,
            fontWeight: "600",
            marginBottom: 10,
            marginTop: 90
        },
        summarySubtitle2: {
            color: isLightMode ? "#3B4949" : "#fff",
            fontSize: 20,
            fontWeight: "600",
            marginBottom: 10,
        },
        subtitle: {
            color: isLightMode ? "#3B4949" : "#fff",
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
            paddingHorizontal: 8,
            paddingVertical: 8,
        },
        view: {
            flexDirection: "column",
            rowGap: 8,
            marginBottom:48
        },
        modalContentLight: {
            backgroundColor: "rgba(255, 255, 255, 0.7)",
        },
        modalContentDark: {
            backgroundColor: "rgba(59, 73, 73, 0.7)",
        },
        modalContent: {
            borderRadius: 50,
            overflow: "hidden",
            width: "100%",
            borderWidth: 1,
            borderColor: "#60BBB6",
            shadowRadius: 4,
        },
        chat: {
            width: 70,
            height: 70,
            alignItems: "flex-start",
            left: -19
        },
        blur: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            padding: 14,
            width: '100%',
            height: 60,
            position: 'absolute',
            borderColor: '#BDF4F1',
            borderWidth: 2,
            borderRadius: 30,
            overflow: 'hidden',
            marginBottom: 20,
          },
        travelmate: {
            fontFamily: 'Montserrat',
            fontWeight: "bold",
            fontSize: 23,
            lineHeight: 28,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            color: isLightMode ? "#545c5c" : "#fff",
            left: -19
        },
        roundshape:  {
            backgroundColor: 'white',
            height: 38, //any of height
            width: 38, //any of width
            justifyContent:"center",
            borderRadius: 22,   // it will be height/2
            alignItems: 'center',
            left: 125,
            borderWidth: 1,
            borderColor: "#60BBB6",
        }
    });

    const modalContentColor = isLightMode ? styles.modalContentLight : styles.modalContentDark;

    return (

        <View style={styles.view}>
            <View style={[styles.blur, modalContentColor]}>
                <Image source={require("../../assets/adaptive-icon.png")} style={styles.chat}/>
                <Text style={styles.travelmate}>TravelMate</Text>
                <View style={styles.roundshape}> 
                <Text>     
                    <FontAwesomeIcon icon={faUser} size={20} color="#60BBB6" />
                </Text>
                </View>
            </View>
        </View>

    );

}