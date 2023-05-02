import { StyleSheet, View, useColorScheme, ScrollView, Image, Text, Button } from "react-native";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { useState } from "react";
import { LinkButton } from "../../../components/LinkButton";
import { faCamera, faMoneyBill, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

export default function () {
    const colorScheme = useColorScheme();
    const insets = useSafeAreaInsets();

    const styles = StyleSheet.create({
        scrollView: {
            borderRadius: 8,
            marginHorizontal: 16,
            marginTop: 16,
            flexDirection: "column",
            rowGap: 8,
        },
        view: {
            flexDirection: "column",
            rowGap: 8,
            marginBottom: insets.bottom,
        },
        note: {
            aspectRatio: 1,
            borderRadius: 8,
            borderWidth: 1,
            borderColor: colorScheme === "light" ? "#60BBB6" : "#BDF4F1",
        },
        Title: {
            color: colorScheme === "light" ? "#3B4949" : "#fff",
            fontWeight: "600",
            fontSize: 22,
            lineHeight: 27,
        },
        Subtitle: {
            color: colorScheme === "light" ? "#3B4949" : "#fff",
            fontSize: 16,
            lineHeight: 22,
        },
        Subtitle2: {
            color: colorScheme === "light" ? "#3B4949" : "#fff",
            fontSize: 15,
            lineHeight: 30,
        },
        Subtitle3: {
            color: colorScheme === "light" ? "#3B4949" : "#fff",
            fontSize: 10,
            lineHeight: 20,
        },
        marginBottom: {
            marginBottom: 32,
        },
        photo: {
            width: "100%",
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
        chat: {
            alignSelf: 'center',
            width: 10,
            height: 10,
            tintColor: colorScheme === "light" ? "#3B4949" : "#fff",
        },    
        icon: {
            color: colorScheme === "light" ? "#3B4949" : "#fff",
        }          
    });

    return (
        <SafeAreaProvider>
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>

                
                <View style={styles.container}>
                    <Image style={styles.photo} source={require("../../../assets/images/three.png")} />
                </View>
               

                <View style={styles.marginBottom}>
                    <Text style={{ marginBottom: 200 }}> </Text>
                    <Text><FontAwesomeIcon size={55} icon={faSun} style={styles.icon}/></Text>
                    <Text>{'     '}</Text>
                    <Text style={styles.Title}>Playa de Cala Bassa</Text>
                    <Text style={styles.Subtitle2}>April 6th, 2023</Text>
                    <Text>{'     '}</Text>
                    <Text style={styles.Subtitle}>Arcu non odio euismod lacinia at quis risus. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. </Text>
                    <Text>{'     '}</Text>
                    
                    <Text style={styles.Subtitle3}>Generated by <Image source={require('../../../assets/chatgpt-icon.png')} style={styles.chat} /> ChatGPT </Text>
                   
                </View>

                <LinkButton title={"Related photos"} newNavigation={"/photos"} icon={faCamera} />
                <Text>{'     '}</Text>
                <LinkButton title={"Related expenses"} newNavigation={"/expenses"} icon={faMoneyBill} />

            </ScrollView>
        </SafeAreaProvider>
    );
}
