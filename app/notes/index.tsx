import { StyleSheet, View, useColorScheme, ScrollView, Button, Text } from "react-native";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { useState } from "react";
import { getCurrentNotes, deleteNote } from "../../data/notes";
import { NotesButton } from "../../components/NotesButton";
import { Header } from "../../components/Header";

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
    });

    return (
        <SafeAreaProvider>
            <Header
                title={"Notes"}
                hasBackButton={true}
                hasAddButton={true}
                addFunction={() => alert("Not implemented yet.")}
            />
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                {notesArray.length > 0 ? (
                    <View style={styles.view}>
                        {notesArray.map((item: any, index: number) => {
                            return (
                                <NotesButton
                                    title={item.title}
                                    subtitle={item.content}
                                    newNavigation={"notes/note" + index}
                                    image={item.image}
                                    key={"note" + index}
                                />
                            );
                        })}
                    </View>
                ) : (
                    <View style={{ alignItems: "center", justifyContent: "center" }}>
                        <Text style={{ fontWeight: "bold", fontSize: 20, marginBottom: 8 }}>
                            No notes.
                        </Text>
                        <Text style={{ fontWeight: "300" }}>Add one by pressing the + icon.</Text>
                    </View>
                )}

                <Button
                    title={"TEST: Delete the first note"}
                    onPress={() => {
                        setNotesArray(getCurrentNotes().slice(1));
                        deleteNote(0);
                    }}
                />
            </ScrollView>
        </SafeAreaProvider>
    );
}
