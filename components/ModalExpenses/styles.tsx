import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    textPrincipal: {
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 20,
        color: "#3B4949",
    },
    textSecondary: {
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: 16,
        lineHeight: 22,
        alignItems: "center",
        color: "#3B4949",
        paddingBottom: 4,
        paddingTop: 16,
    },
    textInput: {
        borderRadius: 8,
        borderWidth: 1,
        padding: 8,
        maxHeight: 200,
    },
    containerLight: {
        backgroundColor: "#ffffffcc",
        borderColor: "#60BBB6",
    },
    containerDark: {
        backgroundColor: "#3B4949cc",
        borderColor: "#BDF4F1",
    },
    modalBackground: {
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        paddingHorizontal: 16,
    },
    modalContent: {
        borderRadius: 16,
        overflow: "hidden",
        padding: 16,
        width: "100%",
        borderWidth: 1,
        borderColor: "#60BBB6",
        shadowRadius: 4,
    },
    modalContentLight: {
        backgroundColor: "rgba(255, 255, 255, 0.7)",
    },
    modalContentDark: {
        backgroundColor: "rgba(59, 73, 73, 0.7)",
    },
    buttonsView: {
        flexDirection: "row",
        columnGap: 8,
        justifyContent: "center",
        marginTop: 16,
    },
    buttonAdd: {
        marginTop: 16,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(112, 217, 211, 0.7)",
        borderColor: "#60BBB6",
        borderWidth: 1,
        borderRadius: 8,
        padding: 8,
        width: "30%",
    },
    textButton: {
        fontWeight: "600",
        fontSize: 16,
        textAlign: "center",
        color: "#3B4949",
    },
    textInputIcon: {
        flexDirection: "row",
        alignItems: "center",
    },
    datePicker: {
        height: 120,
        marginTop: -10,
    },
    pickerButton: {
        paddingHorizontal: 20,
    },
    button: {
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        marginTop: 10,
        marginBottom: 15,
        backgroundColor: "lightgrey",
    },
    textLight: { color: "#3B4949" },
    textDark: { color: "#fff" },
    placeholderTextColorLight: { color: "#888" },
    placeholderTextColorDark: { color: "#ccc" },
});
