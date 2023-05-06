import {
    Image,
    StyleSheet,
    View,
    useColorScheme,
    ImageSourcePropType,
    TouchableOpacity,
} from "react-native";
import { EdgeInsets, SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { useState } from "react";
import { getCurrentImages, deleteImage, setFavorite, Photo, setNote, loadImagesByKey } from "../../../data/images";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faNoteSticky, faTrash, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useRouter, useSearchParams } from "expo-router";
import { AddNotesModal } from "../../../components/ModalNotesInPhotos";
import { Header } from "../../../components/Header";

export default function () {
    const isLightMode: boolean = useColorScheme() === "light";
    const insets: EdgeInsets = useSafeAreaInsets(); // SafeAreaView dimensions
    const router = useRouter();
    const searchParams: Partial<URLSearchParams> = useSearchParams();
    const id: number = searchParams?.["id"] ? parseInt(searchParams["id"]) : 0;
    const tripID: number = searchParams?.["tripID"] ? parseInt(searchParams["tripID"][0]) : 0;

    const [imagesArray] = useState<Photo[]>(loadImagesByKey(tripID)); // Images array

    const [isFavorite, setIsFavorite] = useState<boolean>(imagesArray[id].isFavorite);

    // Notes modal
    const [modalVisible, setModalVisible] = useState<boolean>(false);

    const styles = StyleSheet.create({
        photoView: {
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            paddingBottom: (insets.bottom + 8 + 20 + 16) * 2, // I don't fucking know why it's needed a *2, but ok
        },
        photo: {
            width: "100%",
            height: "100%",
            resizeMode: "contain",
        },
        bottomBar: {
            backgroundColor: isLightMode ? "#E8F3F4" : "#33625F",
            borderTopWidth: 1,
            borderTopColor: "#BDF4F1",
            position: "absolute",
            bottom: 0,
            width: "100%",
        },
        iconsContainer: {
            marginBottom: insets.bottom != 0 ? insets.bottom + 8 : 16,
            marginTop: 16,
            flexDirection: "row",
            justifyContent: "space-around",
        },
        icon: {
            color: isLightMode ? "#3B4949" : "#fff",
        },
        iconTrash: {
            color: "#EB8C6F",
        },
        iconFavorite: {
            color: isFavorite ? "#EB8C6F" : isLightMode ? "#3B4949" : "#fff",
        },
    });

    return (
        <SafeAreaProvider>
            <Header
                title={"Photo"}
                hasBackButton={true}
                rightText={imagesArray[id].date + " | " + imagesArray[id].hour}
            />
            <AddNotesModal
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                onSave={(text: string): void => {
                    setNote(tripID,id, text);
                }}
                index={id}
            />
            <View style={styles.photoView}>
                <Image source={imagesArray[id].image as ImageSourcePropType} style={styles.photo} />
            </View>
            <View style={styles.bottomBar}>
                <View style={styles.iconsContainer}>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() => {
                            setModalVisible(true);
                        }}
                    >
                        <FontAwesomeIcon icon={faNoteSticky} size={20} style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() => {
                            if (imagesArray[id].isFavorite) {
                                setFavorite(tripID, id, false);
                                setIsFavorite(false);
                            } else {
                                setFavorite(tripID, id, true);
                                setIsFavorite(true);
                            }
                        }}
                    >
                        <FontAwesomeIcon icon={faHeart} size={20} style={styles.iconFavorite} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() => {
                            console.log("delete");
                            deleteImage(tripID, id);
                            router.back();
                        }}
                    >
                        <FontAwesomeIcon icon={faTrash} size={20} style={styles.iconTrash} />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaProvider>
    );
}
