import { StyleSheet, View, useColorScheme, ScrollView, Image, Text, TextInput } from "react-native";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { useState } from "react";
import { getCurrentNotes } from "../../../data/notes";
import { LinkButton } from "../../../components/LinkButton";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

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
    });

    return (
        <SafeAreaProvider>
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>

                <View style={styles.marginBottom}>
                    <Text style={styles.Title}>Nota 2</Text>
                    <Text>{'     '}</Text>
                    <Text style={styles.Subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text>
                    <Text>{'     '}</Text>
                    <Text style={styles.Subtitle}>Arcu non odio euismod lacinia at quis risus. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. </Text>
                    <Text>{'     '}</Text>
                    <TextInput style={styles.Subtitle}>Acabar os meus toughts...</TextInput>
                </View>

                <LinkButton title={"Add related photos"} newNavigation={"/photos"} icon={faCamera} />

            </ScrollView>
        </SafeAreaProvider>
    );
}
