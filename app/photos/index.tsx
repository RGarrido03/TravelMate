import { Image, StyleSheet, View, useColorScheme, ScrollView, Text, Pressable } from "react-native";
import { EdgeInsets, SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { useCallback, useState } from "react";
import { loadImagesByKey, Photo } from "../../data/images";
import { useRouter, useFocusEffect, useSearchParams } from "expo-router";
import { Header } from "../../components/Header";

export default function () {
    
    const isLightMode: boolean = useColorScheme() === "light";
    const insets: EdgeInsets = useSafeAreaInsets(); // SafeAreaView dimensions
    const navigation = useRouter();

    const searchParams: Partial<URLSearchParams> = useSearchParams();
    const tripID: number = searchParams?.["id"] ? parseInt(searchParams["id"]) : 0;

    const [containerWidth, setContainerWidth] = useState<number>(0); // Grid container dimensions hook
    const [imagesArray, setImagesArray] = useState<Photo[]>(loadImagesByKey(tripID)); // Images array

    // Get container width during component creation
    const onLayout = (event): void => {
        const { width } = event.nativeEvent.layout;
        setContainerWidth(width);
    };
    const itemSize: number = (containerWidth - 24) / 3;

    useFocusEffect(
        useCallback((): void => {
            setImagesArray(loadImagesByKey(tripID).slice());
        }, []) // Empty callback to avoid infinite loop
    );

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
            borderColor: isLightMode ? "#60BBB6" : "#BDF4F1",
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
            <Header
                title={"Photos"}
                hasBackButton={true}
                hasAddButton={true}
                addFunction={() => alert("Not implemented yet.")}
            />
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                {imagesArray.length > 0 ? ( // If there are photos, show them
                    <View onLayout={onLayout} style={styles.view} key={"imgGrid"}>
                        {imagesArray.map((image: any, index: number) => {
                            return (
                                <Pressable
                                    key={"img" + index}
                                    onPress={() => navigation.push("photos/photo?id=" + index + "&tripID=" + tripID)}
                                    style={styles.photoPressable}
                                >
                                    <Image source={image.image} style={styles.photoImage} />
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
            </ScrollView>
        </SafeAreaProvider>
    );
}
