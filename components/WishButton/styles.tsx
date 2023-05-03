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
        backgroundColor: "#3B4949cc",
        borderColor: "#BDF4F1",
    },
    view: {
        flexDirection: "row",
        alignItems: "center",
    },
    textView: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        fontWeight: "700",
        marginBottom: 4,
    },
    info: {
        fontSize: 16,
        fontWeight: "400",
        lineHeight: 22,
        marginRight: 4,
    },
    notes: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
    },
    subtitle: {
        fontSize: 12,
        fontWeight: "400",
    },
    textLight: {
        color: "#3B4949",
    },
    textDark: {
        color: "#fff",
    },
    textBox: {
        color: "#fff",
    },
    textBoxLow: {
        backgroundColor: "#60BBB6",
    },
    textBoxHigh: {
        backgroundColor: "#EB8C6F",
    },
});
