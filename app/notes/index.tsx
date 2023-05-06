import { StyleSheet, View, useColorScheme, ScrollView, Button, Text } from "react-native";
import { EdgeInsets, SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { useState } from "react";
import { deleteNote, Note, loadNotesByIdx } from "../../data/notes";
import { NotesButton } from "../../components/NotesButton";
import { Header } from "../../components/Header";
import { useSearchParams } from "expo-router";

export default function () {
    const isLightMode: boolean = useColorScheme() === "light";
    const insets: EdgeInsets = useSafeAreaInsets();

    const searchParams: Partial<URLSearchParams> = useSearchParams();
    const tripID: number = searchParams?.["id"] ? parseInt(searchParams["id"]) : 0;
    

    const [notesArray, setNotesArray] = useState<Note[]>(loadNotesByIdx(tripID)); // Images array

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
            borderColor: isLightMode ? "#60BBB6" : "#BDF4F1",
        },
    });

    const handleAddNotePress = () => {
        const newNote: Note = {
            title: "New Note", 
            content: "Click to edit!", 
            image: null,
            date: null,
            text: null
        };
        setNotesArray([...notesArray, newNote]);
    };

    return (
        <SafeAreaProvider>
            <Header
                title={"Notes"}
                hasBackButton={true}
                hasAddButton={true}
                addFunction={handleAddNotePress}
            />
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                {notesArray.length > 0 ? (
                    <View style={styles.view}>
                        {notesArray.map((item: any, index: number) => {
                            return (
                                <NotesButton
                                    title={item.title}
                                    subtitle={item.content}
                                    newNavigation={"notes/note?id=" + index}
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
                        setNotesArray(loadNotesByIdx(tripID).slice(0));
                        deleteNote(tripID,0);
                    }}
                />
            </ScrollView>
        </SafeAreaProvider>
    );
}
