import {
    Image,
    View,
    Text,
    useColorScheme,
    ScrollView,
    StyleSheet,
    ImageSourcePropType,
} from "react-native";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { Header } from "../../../components/Header";
import { LinkButton } from "../../../components/LinkButton";
import { faCamera, faMoneyBill, faPlus, faSprayCan } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useSearchParams } from "expo-router";
import { getCurrentPOIs } from "../../../data/pois";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

export default function () {
    const isLightMode: boolean = useColorScheme() === "light";
    const insets = useSafeAreaInsets();
    const [poisArray, setPoisArray] = useState(getCurrentPOIs());

    const searchParams: Partial<URLSearchParams> = useSearchParams();
    const id: number = searchParams?.["id"] ? parseInt(searchParams["id"][0]) : 0;

    const handleAddPoi = (data): void => {
        setPoisArray(
            poisArray.concat({
                date: data.date,
                icon: data.value,
                title: data.title,
                image: data.image,
                text: data.text,
            })
        );
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
        icon: {
            color: isLightMode ? "#3B4949" : "#fff",
            marginBottom: 16,
        },
        Subtitle3: {
            color: isLightMode ? "#3B4949" : "#fff",
            fontSize: 10,
            lineHeight: 20,
            marginTop: 16,
        },
        chat: {
            alignSelf: "center",
            width: 10,
            height: 10,
            tintColor: isLightMode ? "#3B4949" : "#fff",
        },
    });

    if (poisArray[id]) {
        if (poisArray[id].image) {
            return (
                <SafeAreaProvider>
                    <Header title={"POI"} hasBackButton={true} rightText={poisArray[id].date} />
                    <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                        <Image
                            source={poisArray[id].image as ImageSourcePropType}
                            style={styles.photo}
                        />
                        <View style={styles.marginBottom}>
                            <Text style={styles.icon}>
                                <FontAwesomeIcon
                                    size={55}
                                    icon={poisArray[id].icon}
                                    style={styles.icon}
                                />
                            </Text>
                            <Text style={styles.Title}>{poisArray[id].title}</Text>
                            <Text style={styles.Subtitle}>{poisArray[id].date}</Text>
                            <Text></Text>
                            <Text style={styles.Subtitle}>{poisArray[id].text}</Text>
                            <Text style={styles.Subtitle3}>
                                Generated by{" "}
                                <Image
                                    source={require("../../../assets/chatgpt-icon.png")}
                                    style={styles.chat}
                                />{" "}
                                ChatGPT{" "}
                            </Text>
                        </View>
                        <View style={styles.view}>
                            <LinkButton
                                title={"Related photos"}
                                newNavigation={"/photos"}
                                icon={faCamera}
                            />
                            <LinkButton
                                title={"Related expenses"}
                                newNavigation={"/expenses"}
                                icon={faMoneyBill}
                            />
                        </View>
                    </ScrollView>
                </SafeAreaProvider>
            );
        } else {
            return (
                <SafeAreaProvider>
                    <Header title={"POI"} hasBackButton={true} rightText={poisArray[id].date} />
                    <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                        <View style={styles.marginBottom}>
                            <Text style={styles.icon}>
                                <FontAwesomeIcon
                                    size={55}
                                    icon={poisArray[id].icon}
                                    style={styles.icon}
                                />
                            </Text>
                            <Text style={styles.Title}>{poisArray[id].title}</Text>
                            <Text style={styles.Subtitle}>{poisArray[id].date}</Text>
                            <Text></Text>
                            <Text style={styles.Subtitle}>{poisArray[id].text}</Text>
                            <Text style={styles.Subtitle3}>
                                Generated by{" "}
                                <Image
                                    source={require("../../../assets/chatgpt-icon.png")}
                                    style={styles.chat}
                                />{" "}
                                ChatGPT{" "}
                            </Text>
                        </View>
                        <View style={styles.view}>
                            <LinkButton
                                title={"Add cover photo"}
                                newNavigation={"/photos"}
                                icon={faPlus}
                            />
                            <LinkButton
                                title={"Related photos"}
                                newNavigation={"/photos"}
                                icon={faCamera}
                            />
                            <LinkButton
                                title={"Related expenses"}
                                newNavigation={"/expenses"}
                                icon={faMoneyBill}
                            />
                        </View>
                    </ScrollView>
                </SafeAreaProvider>
            );
        }
    } else {
        return (
            <SafeAreaProvider>
                <Header title={"POI"} hasBackButton={true} rightText="25-05-2023" />
                <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                    <View style={styles.marginBottom}>
                        <Text style={styles.icon}>
                            <FontAwesomeIcon size={55} icon={faSprayCan} style={styles.icon} />
                        </Text>
                        <Text style={styles.Title}>New POI</Text>
                        <Text style={styles.Subtitle}>Generating text...</Text>
                        <Text style={styles.Subtitle3}>
                            Generating text by{" "}
                            <Image
                                source={require("../../../assets/chatgpt-icon.png")}
                                style={styles.chat}
                            />{" "}
                            ChatGPT
                        </Text>
                    </View>
                    <View style={styles.view}>
                        <LinkButton
                            title={"Add cover photo"}
                            newNavigation={"/photos"}
                            icon={faPlus}
                        />
                        <LinkButton
                            title={"Related photos"}
                            newNavigation={"/photos"}
                            icon={faCamera}
                        />
                        <LinkButton
                            title={"Related expenses"}
                            newNavigation={"/expenses"}
                            icon={faMoneyBill}
                        />
                    </View>
                </ScrollView>
            </SafeAreaProvider>
        );
    }
}

interface Props {
    title: string;
    content: string;
    image: string;
    date: string;
    texto: string;
}
