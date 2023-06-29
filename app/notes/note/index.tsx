import {
    Image,
    View,
    useColorScheme,
    ScrollView,
    StyleSheet,
    ImageSourcePropType,
} from "react-native";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { Header } from "../../../components/Header";
import { LinkButton } from "../../../components/LinkButton";
import { faCamera, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useRouter, useLocalSearchParams } from "expo-router";
import { TextInput } from "react-native-gesture-handler";
import { deleteNote, editNote, loadNotesByIdx, Note } from "../../../data/notes";

export default () => {
    const isLightMode: boolean = useColorScheme() === "light";
    const insets = useSafeAreaInsets();

    const searchParams: Partial<URLSearchParams> = useLocalSearchParams();
    const id: number = searchParams?.["id"] ? parseInt(searchParams["id"]) : 0;
    const tripID: number = searchParams?.["tripID"] ? parseInt(searchParams["tripID"][0]) : 0;

    const [notesArray, setNotesArray] = useState(loadNotesByIdx(tripID));

    const navigation = useRouter();

    const handleDeleteNote = () => {
        deleteNote(tripID, id);
        setNotesArray(loadNotesByIdx(tripID));
        navigation.back();
    };

    const handleEditNoteTitle = (text) => {
        const newNote: Note = {
            title: text,
            text: notesArray[id].text,
            content: notesArray[id].content,
            date: notesArray[id].date,
            image: notesArray[id].image,
        };

        editNote(tripID, id, newNote);
    };

    const handleEditNoteText = (text) => {
        const newNote: Note = {
            title: notesArray[id].title,
            text: text,
            content: notesArray[id].content,
            date: notesArray[id].date,
            image: notesArray[id].image,
        };

        editNote(tripID, id, newNote);
    };

    const styles = StyleSheet.create({
        container: {
            borderRadius: 12,
            borderWidth: 1,
            padding: 16,
        },
        containerLight: {
            backgroundColor: "#ffffffcc",
            borderColor: "#60BBB6",
        },
        containerDark: {
            backgroundColor: "#3B4949cc",
            borderColor: "#BDF4F1",
        },
        image: {
            borderRadius: 4,
            borderWidth: 1,
            aspectRatio: 1,
            height: 48,
            width: 48,
            marginLeft: 16,
        },
        imageLight: {
            borderColor: "#60BBB6",
        },
        imageDark: {
            borderColor: "#BDF4F1",
        },
        title: {
            fontSize: 16,
            fontWeight: "600",
            marginBottom: 4,
        },
        textLight: {
            color: "#3B4949",
        },
        textDark: {
            color: "#fff",
        },
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
        Title: {
            color: isLightMode ? "#3B4949" : "#fff",
            fontWeight: "600",
            fontSize: 22,
            lineHeight: 27,
            marginBottom: 16,
        },
        Subtitle: {
            color: isLightMode ? "#3B4949" : "#fff",
            fontSize: 16,
            lineHeight: 22,
        },
        marginBottom: {
            marginBottom: 32,
        },
        photo: {
            borderRadius: 8,
            borderWidth: 1,
            width: "100%",
            height: 191.5,
            backgroundColor: "#60BBB6",
            borderColor: "#60BBB6",
            marginBottom: 16,
        },
    });
    return (
        <SafeAreaProvider>
            <Header
                title={"Note"}
                hasBackButton={true}
                hasDeleteButton={true}
                deleteFunction={handleDeleteNote}
                rightText={notesArray[id].date}
            />
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                {notesArray[id].image && (
                    <Image
                        source={notesArray[id].image as ImageSourcePropType}
                        style={styles.photo}
                    />
                )}
                <View style={styles.marginBottom}>
                    <TextInput
                        placeholder="New Note"
                        style={styles.Title}
                        onChangeText={handleEditNoteTitle}
                    >
                        {notesArray[id] && notesArray[id].title}
                    </TextInput>
                    <TextInput
                        placeholder="Click here to edit"
                        multiline={true}
                        style={styles.Subtitle}
                        onChangeText={handleEditNoteText}
                    >
                        {notesArray[id] && notesArray[id].text}
                    </TextInput>
                </View>
                <LinkButton
                    title={"Add related photos"}
                    newNavigation={"/photos"}
                    icon={faCamera}
                />
            </ScrollView>
        </SafeAreaProvider>
    );
};
