import { StyleSheet, View, Text, ScrollView, useColorScheme, Button } from "react-native";
import { EdgeInsets, SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { useState } from "react";
import { deletePOIs, getCurrentPOIs, POIs } from "../../data/pois";
import { POIsButton } from "../../components/POIsButton";
import { Header } from "../../components/Header";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faSprayCan, faSun } from "@fortawesome/free-solid-svg-icons";
import { AddPoiModal } from "../../components/AddPoi";


export default function () {
    const isLightMode: boolean = useColorScheme() === "light";
    const insets: EdgeInsets = useSafeAreaInsets(); // SafeAreaView dimensions
    const [POIsArray, setPOIsArray] = useState<POIs[]>(getCurrentPOIs());

    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [isAdd, setIsAdd] = useState<boolean>(true);

    const [title, setTitle] = useState<string>("");
    const [value, setValue] = useState<string>("");
    const [date, setDate] = useState<string>("");
    const [icon, setIcon] = useState<IconDefinition>();
    const [image, setImage] = useState<any>("");
    const [text, setText] = useState<any>("");

    const handleAddPoi = (data): void => {
        setPOIsArray(
            POIsArray.concat({
                date: data.date,
                title: data.title,
                icon: faSprayCan,
                image: null,
                text: ""
            })
        );
    };

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
            borderColor: isLightMode ? "#60BBB6" : "#BDF4F1",
        },
        rowContainer: {
            flexDirection: "column",
            rowGap: 8,
        },
        subtitle: {
            color: isLightMode ? "#3B4949" : "#fff",
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
                addFunction={() => {
                    setIsAdd(true);
                    setDate("");
                    setIcon(faSun);
                    setTitle("");
                    setValue("");
                    setImage(null);
                    setText("");
                    setModalVisible(true);
                }}
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
                                    newNavigation={"pois/poi?id=" + index}
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
                {/* <Button
                    title={"TEST: Delete the first POI"}
                    onPress={() => {
                        setPOIsArray(getCurrentPOIs().slice(1));
                        deletePOIs(1);
                    }}
                /> */}
            <AddPoiModal
                    visible={modalVisible}
                    onClose={() => setModalVisible(false)}
                    onAdd={isAdd && handleAddPoi}
                    isAdd={isAdd}
                    title={title}
                    date={date}
                    setTitle={setTitle}
                    setDate={setDate}
                />
            </ScrollView>
        </SafeAreaProvider>
    );
}
