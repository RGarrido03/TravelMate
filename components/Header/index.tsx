import { View, Text, useColorScheme, StyleSheet, TouchableOpacity, Platform } from "react-native";
import { EdgeInsets, useSafeAreaInsets } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft, faAdd, faTrash } from "@fortawesome/free-solid-svg-icons";

interface Props {
    hasBackButton?: boolean;
    rightText?: string;
    hasAddButton?: boolean;
    addFunction?: () => void;
    title: string;
    hasDeleteButton?: boolean;
    deleteFunction?: () => void;
}

export const Header = ({ hasBackButton, rightText, hasAddButton, addFunction, hasDeleteButton, deleteFunction, title }: Props) => {
    const navigation = useRouter();
    const insets: EdgeInsets = useSafeAreaInsets(); // SafeAreaView dimensions
    const isLightMode: boolean = useColorScheme() === "light";

    const styles = StyleSheet.create({
        container: {
            backgroundColor: isLightMode ? "#E8F3F4" : "#33625F",
            paddingTop: insets.top,
            borderBottomWidth: 1,
            borderBottomColor: "#BDF4F1",
        },
        header: {
            paddingHorizontal: 16,
            paddingTop: Platform.OS === "ios" ? 8 : 16,
            paddingBottom: 16,
            flexDirection: "row",
            alignItems: "center",
            gap: 16,
        },
        title: {
            flex: 1,
            fontSize: 24,
            fontWeight: "bold",
        },
        rightText: {
            fontSize: 16,
        },
        textColor: {
            color: isLightMode ? "#000" : "#fff",
        },
        iconColor: {
            color: isLightMode ? "#60BBB6" : "#BDF4F1",
        },
        addButtonContainer: {
            backgroundColor: isLightMode ? "#ffffffcc" : "#3B4949cc",
            padding: 4,
            borderRadius: 16,
            borderWidth: 1,
            borderColor: isLightMode ? "#60BBB6" : "#BDF4F1",
        },
        deleteButtonContainer: {
            backgroundColor: isLightMode ? "#ffffffcc" : "#3B4949cc",
            padding: 6,
            borderRadius: 16,
            borderWidth: 1,
            borderColor: '#EB8C6F',
        },
    });

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                {hasBackButton && (
                    <TouchableOpacity onPress={() => navigation.back()}>
                        <FontAwesomeIcon
                            icon={faArrowLeft}
                            size={23}
                            color={styles.textColor.color}
                        />
                    </TouchableOpacity>
                )}
                <Text style={[styles.title, styles.textColor]}>{title}</Text>
                <Text style={[styles.rightText, styles.textColor]}>{rightText}</Text>
                {hasAddButton && (
                    <TouchableOpacity onPress={addFunction} style={styles.addButtonContainer}>
                        <FontAwesomeIcon icon={faAdd} size={18} color={styles.iconColor.color} />
                    </TouchableOpacity>
                )}
                {hasDeleteButton && (
                    <TouchableOpacity onPress={deleteFunction} style={styles.deleteButtonContainer}>
                        <FontAwesomeIcon icon={faTrash} size={16} color={'#EB8C6F'} />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};
