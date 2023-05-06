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
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useSearchParams } from "expo-router";
import { TextInput } from "react-native-gesture-handler";
import { loadNotesByIdx } from "../../../data/notes";

export default ({ title, image, date, texto }: Props) => {
    const isLightMode: boolean = useColorScheme() === "light";
    const insets = useSafeAreaInsets();
  
    const searchParams: Partial<URLSearchParams> = useSearchParams();
    const id: number = searchParams?.["id"] ? parseInt(searchParams["id"]) : 0;
    const tripID: number = searchParams?.["tripID"] ? parseInt(searchParams["tripID"][0]) : 0;

    const [notesArray, setNotesArray] = useState(loadNotesByIdx(tripID));

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

    if (notesArray[id].image) {
        return (
            <SafeAreaProvider>
                <Header title={"Note"} hasBackButton={true} rightText={notesArray[id].date} />
                <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                    <Image
                        source={notesArray[id].image}
                        style={styles.photo}
                    />
                    <View style={styles.marginBottom}>
                        <TextInput style={styles.Title}>{notesArray[id].title}</TextInput>
                        <TextInput multiline={true} style={styles.Subtitle}>
                            {notesArray[id].text}
                        </TextInput>
                    </View>
                    <LinkButton
                        title={"Add related photos"}
                        newNavigation={"../photos"}
                        icon={faCamera}
                    />
                </ScrollView>
            </SafeAreaProvider>
        );
    } else {
        return (
            <SafeAreaProvider>
                <Header title={"Note"} hasBackButton={true} rightText={notesArray[id].date} />
                <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                    <View style={styles.marginBottom}>
                        <TextInput style={styles.Title}>{notesArray[id].title}</TextInput>
                        <TextInput multiline={true} style={styles.Subtitle}>
                            {notesArray[id].text}
                        </TextInput>
                    </View>
                    <LinkButton
                        title={"Add related photos"}
                        newNavigation={"../photos"}
                        icon={faCamera}
                    />
                </ScrollView>
            </SafeAreaProvider>
        );
    }
};

interface Props {
    title: string;
    content: string;
    image: string;
    date: string;
    texto: string;
}
