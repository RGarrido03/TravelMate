import { StyleSheet, View, Text, ScrollView, useColorScheme, Button } from "react-native";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { useState } from "react";
import { getCurrentPOIs, deletePOIs } from "../../data/pois";
import { POIsButton } from "../../components/POIsButton";
import { Header } from "../../components/Header";

export default function () {
    const colorScheme = useColorScheme(); // Color mode (light/dark)
    const insets = useSafeAreaInsets(); // SafeAreaView dimensions
    const [POIsArray, setPOIsArray] = useState(getCurrentPOIs());

    const styles = StyleSheet.create({
        scrollView: {
            borderRadius: 8,
            marginHorizontal: 16,
            marginTop: 20,
            flexDirection: "column",
            rowGap: 8,
        },
        view: {
            flexDirection: "column",
            rowGap: 8,
            marginBottom: insets.bottom,
        },
        POI: {
            aspectRatio: 1,
            borderRadius: 8,
            borderWidth: 1,
            borderColor: colorScheme === "light" ? "#60BBB6" : "#BDF4F1",
        },
        rowContainer: {
            flexDirection: "column",
            rowGap: 8,
        },
        subtitle: {
            color: colorScheme === "light" ? "#3B4949" : "#fff",
            fontWeight: "600",
            fontSize: 16,
            lineHeight: 22,
        },
        marginBottom: {
            marginBottom: 32,
        },
    });

    return (
        <SafeAreaProvider>
            <Header
                title={"POIs"}
                hasBackButton={true}
                hasAddButton={true}
                addFunction={() => alert("Not implemented yet.")}
            />
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                {POIsArray.length > 0 ? (
                    <View style={styles.view}>
                        {POIsArray.map((item: any, index: number) => {
                            return (
                                <POIsButton
                                    date={item.date}
                                    icon={item.icon}
                                    title={item.title}
                                    image={item.image}
                                    newNavigation={"pois/poi" + index}
                                    key={"poi" + index}
                                />
                            );
                        })}
                    </View>
                ) : (
                    <View style={{ alignItems: "center", justifyContent: "center" }}>
                        <Text style={{ fontWeight: "bold", fontSize: 20, marginBottom: 8 }}>
                            No POIs.
                        </Text>
                        <Text style={{ fontWeight: "300" }}>Add one by pressing the + icon.</Text>
                    </View>
                )}

                <Button
                    title={"TEST: Delete the first POI"}
                    onPress={() => {
                        setPOIsArray(getCurrentPOIs().slice(1));
                        deletePOIs(0);
                    }}
                />
            </ScrollView>
        </SafeAreaProvider>
    );
}
