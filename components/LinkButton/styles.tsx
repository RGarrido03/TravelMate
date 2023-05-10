import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
        backgroundColor: "#3B494977",
        borderColor: "#BDF4F1",
    },
    containerLight2: {
        backgroundColor: "#ff9999",
        borderColor: "#fa493c",
    },
    containerDark2: {
        backgroundColor: "#ff9999",
        borderColor: "#fa493c",
    },
    view: {
        flexDirection: "row",
        alignItems: "center",
    },
    text: {
        fontSize: 16,
        fontWeight: "400",
        flex: 1,
        marginHorizontal: 16,
    },
    textLight: {
        color: "#3B4949",
    },
    textDark: {
        color: "#fff",
    },
});
