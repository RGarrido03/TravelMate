import {
    Image,
    StyleSheet,
    View,
    useColorScheme,
    ScrollView,
    Button,
    Text,
    Pressable,
} from "react-native";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { useState } from "react";
import { getCurrentImages, deleteImage } from "../../data/images";
import { useRouter } from "expo-router";

export default function () {
    const colorScheme = useColorScheme(); // Color mode (light/dark)
    const insets = useSafeAreaInsets(); // SafeAreaView dimensions
    const [containerWidth, setContainerWidth] = useState(0); // Grid container dimensions hook
    const [imagesArray, setImagesArray] = useState(getCurrentImages()); // Images array
    const navigation = useRouter();

    // Get container width during component creation
    const onLayout = (event) => {
        const { width } = event.nativeEvent.layout;
        setContainerWidth(width);
    };
    const itemSize = (containerWidth - 24) / 3;

    const styles = StyleSheet.create({
        scrollView: {
            borderRadius: 8,
            marginHorizontal: 16,
            marginTop: 16,
            overflow: "hidden",
        },
        view: {
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            marginBottom: insets.bottom,
            justifyContent: "flex-start",
            margin: -4,
        },
        photoPressable: {
            margin: 4,
            aspectRatio: 1,
            borderRadius: 8,
            borderWidth: 1,
            borderColor: colorScheme === "light" ? "#60BBB6" : "#BDF4F1",
            width: itemSize,
            height: itemSize,
        },
        photoImage: {
            width: "100%",
            height: "100%",
            borderRadius: 7,
        },
    });

    return (
        <SafeAreaProvider>
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                {imagesArray.length > 0 ? ( // If there are photos, show them
                    <View onLayout={onLayout} style={styles.view} key={"imgGrid"}>
                        {imagesArray.map((path: any, index: number) => {
                            return (
                                <Pressable
                                    key={"img" + index}
                                    onPress={() => navigation.push("photos/photo?id=" + index)}
                                    style={styles.photoPressable}
                                >
                                    <Image source={path} style={styles.photoImage} />
                                </Pressable>
                            );
                        })}
                    </View>
                ) : (
                    // Message shown when there are no photos in the array.
                    <View style={{ alignItems: "center", justifyContent: "center" }}>
                        <Text style={{ fontWeight: "bold", fontSize: 20, marginBottom: 8 }}>
                            No photos.
                        </Text>
                        <Text style={{ fontWeight: "300" }}>Add one by pressing the + icon.</Text>
                    </View>
                )}

                {/* Test button for deleting photos. It's not planned to stay here.
                    We need luck to implement the selected photo goddamn thing :') */}
                <Button
                    title={"TEST: Delete the first photo"}
                    onPress={() => {
                        setImagesArray(getCurrentImages().slice(1));
                        deleteImage(0);
                    }}
                />
            </ScrollView>
        </SafeAreaProvider>
    );
}
