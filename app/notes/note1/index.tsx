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
    });

    return (
        <SafeAreaProvider>
            <Header title={"Note"} hasBackButton={true} rightText={"09/08/2022"} />
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                <View style={styles.marginBottom}>
                    <Text style={styles.Title}>Things of Ibiza's Day Life</Text>
                    <Text>{"     "}</Text>
                    <Text style={styles.Subtitle}>
                        Beyond the pulsing nightlife and hedonistic parties, 
                        Ibiza's day life is a haven of relaxation, offering a 
                        tranquil escape from the hustle and bustle of everyday life.{" "}
                    </Text>
                    <Text>{"     "}</Text>
                    <Text style={styles.Subtitle}>
                        Discover hidden coves and unspoiled nature reserves, 
                        where the only sounds are the chirping of birds and 
                        the gentle rustling of leaves.{" "}
                    </Text>
                    <Text>{"     "}</Text>
                    <TextInput style={styles.Subtitle}>The sky turned a brilliant shade of... acabar</TextInput>
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
