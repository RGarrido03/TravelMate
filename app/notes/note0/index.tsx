import { StyleSheet, View, useColorScheme, ScrollView, Image, Text, TextInput } from "react-native";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { useState } from "react";
import { getCurrentNotes } from "../../../data/notes";
import { LinkButton } from "../../../components/LinkButton";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { Header } from "../../../components/Header";

export default function () {
    const colorScheme = useColorScheme();
    const insets = useSafeAreaInsets();
    const [notesArray, setNotesArray] = useState(getCurrentNotes());

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
        marginBottom: {
            marginBottom: 32,
        },
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
    });

    return (
        <SafeAreaProvider>
            <Header title={"Note"} hasBackButton={true} rightText={"11/08/2022"} />
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <Image
                        style={styles.photo}
                        source={require("../../../assets/images/one.png")}
                    />
                </View>

                <View style={styles.marginBottom}>
                    <Text style={{ marginBottom: 195 }} />
                    <Text style={styles.Title}>Nota 1</Text>
                    <Text>{"     "}</Text>
                    <Text style={styles.Subtitle}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.{" "}
                    </Text>
                    <Text>{"     "}</Text>
                    <Text style={styles.Subtitle}>
                        Arcu non odio euismod lacinia at quis risus. Vel fringilla est ullamcorper
                        eget nulla facilisi etiam dignissim diam.{" "}
                    </Text>
                    <Text>{"     "}</Text>
                    <TextInput style={styles.Subtitle}>Acabar os meus toughts...</TextInput>
                </View>

                <LinkButton
                    title={"Add related photos"}
                    newNavigation={"/photos"}
                    icon={faCamera}
                />
            </ScrollView>
        </SafeAreaProvider>
    );
}
