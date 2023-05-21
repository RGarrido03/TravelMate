import { StyleSheet, View, useColorScheme, ScrollView, Button, Text } from "react-native";
import { EdgeInsets, SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { useCallback, useState } from "react";
import { deleteNote, Note, loadNotesByIdx, addNote } from "../../data/notes";
import { NotesButton } from "../../components/NotesButton";
import { Header } from "../../components/Header";
import { useFocusEffect, useSearchParams } from "expo-router";

export default function () {
    const isLightMode: boolean = useColorScheme() === "light";
    const insets: EdgeInsets = useSafeAreaInsets();

    const searchParams: Partial<URLSearchParams> = useSearchParams();
    const tripID: number = searchParams?.["tripId"] ? parseInt(searchParams["tripId"]) : 0;
    

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
            title: "New note",
            content: "",
            image: null,
            date: new Date().toISOString().slice(0, 10),
            text: "",
        }

        addNote(
            tripID,newNote
        );
        
        setNotesArray(loadNotesByIdx(tripID).slice());
    
    }

    useFocusEffect(
        useCallback((): void => {
            setNotesArray(loadNotesByIdx(tripID).slice());
        }, []) // Empty callback to avoid infinite loop
    );

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

                {/* <Button
                    title={"TEST: Delete the first note"}
                    onPress={() => {
                        setNotesArray(loadNotesByIdx(tripID).slice(0));
                        deleteNote(tripID,0);
                    }}
                /> */}
            </ScrollView>
        </SafeAreaProvider>
    );
}
