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
});
