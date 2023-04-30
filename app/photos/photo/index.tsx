import {
    Image,
    StyleSheet,
    View,
    useColorScheme,
    ImageSourcePropType,
    TouchableOpacity,
} from "react-native";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { useState } from "react";
import { getCurrentImages, deleteImage } from "../../../data/images";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faNoteSticky, faMapPin, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useSearchParams } from "expo-router";

export default function () {
    const colorScheme = useColorScheme(); // Color mode (light/dark)
    const insets = useSafeAreaInsets(); // SafeAreaView dimensions
    const [imagesArray] = useState(getCurrentImages()); // Images array
    const searchParams = useSearchParams();
    const id = searchParams["id"][0];

    const styles = StyleSheet.create({
        photoView: {
            // Fix photo size bug
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "100%",
            paddingBottom: insets.bottom + 8 + 20 + 16,
        },
        photo: {
            width: "100%",
        },
        bottomBar: {
            backgroundColor: colorScheme === "light" ? "#E8F3F4" : "#33625F",
            position: "absolute",
            bottom: 0,
            width: "100%",
        },
        iconsContainer: {
            marginBottom: insets.bottom + 8,
            marginTop: 16,
            flexDirection: "row",
            justifyContent: "space-around",
        },
        icon: {
            color: colorScheme === "light" ? "#3B4949" : "#fff",
        },
        iconTrash: {
            color: "#EB8C6F",
        },
    });

    return (
        <SafeAreaProvider>
            <View style={styles.photoView}>
                <Image source={imagesArray[id] as ImageSourcePropType} style={styles.photo} />
            </View>
            <View style={styles.bottomBar}>
                <View style={styles.iconsContainer}>
                    {/* TODO: Make these buttons work.
                        Notes and pins probably require an array refactor. */}
                    <TouchableOpacity activeOpacity={0.5}>
                        <FontAwesomeIcon icon={faNoteSticky} size={20} style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5}>
                        <FontAwesomeIcon icon={faMapPin} size={20} style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5}>
                        <FontAwesomeIcon icon={faTrash} size={20} style={styles.iconTrash} />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaProvider>
    );
}
