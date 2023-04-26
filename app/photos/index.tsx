import { Image, StyleSheet, View, useColorScheme, ScrollView, Button, Text } from "react-native";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { useState } from "react";
import { getCurrentImages, deleteImage } from "../../data/images";

export default function () {
    const colorScheme = useColorScheme();
    const insets = useSafeAreaInsets();
    const [containerWidth, setContainerWidth] = useState(0);
    const [imagesArray, setImagesArray] = useState(getCurrentImages());

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
        photo: {
            margin: 4,
            aspectRatio: 1,
            borderRadius: 8,
            borderWidth: 1,
            borderColor: colorScheme === "light" ? "#60BBB6" : "#BDF4F1",
        },
    });

    const onLayout = (event) => {
        const { width } = event.nativeEvent.layout;
        setContainerWidth(width);
    };
    const itemWidth = (containerWidth - 24) / 3;

    return (
        <SafeAreaProvider>
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                {imagesArray.length > 0 ? (
                    <View onLayout={onLayout} style={styles.view} key={"imgGrid"}>
                        {imagesArray.map((path: any, index: number) => {
                            return (
                                <Image
                                    source={path}
                                    style={[
                                        styles.photo,
                                        {
                                            width: itemWidth,
                                        },
                                    ]}
                                    key={"img" + index}
                                />
                            );
                        })}
                    </View>
                ) : (
                    <View style={{ alignItems: "center", justifyContent: "center" }}>
                        <Text style={{ fontWeight: "bold", fontSize: 20, marginBottom: 8 }}>
                            No images.
                        </Text>
                        <Text style={{ fontWeight: "300" }}>Add one by pressing the + icon.</Text>
                    </View>
                )}

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
