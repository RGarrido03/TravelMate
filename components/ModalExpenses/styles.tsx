import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    textPrincipal: {
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 20,
        lineHeight: 24,
        alignItems: "center",
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
        padding: 4,
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
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
        backgroundColor: "#ffffff",
        opacity: 1.0,
        borderRadius: 16,
        padding: 16,
        width: "80%",
        position: "absolute",
        top: "25%",
        left: "10%",
    },
    buttonAdd: {
        marginTop: 16,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(112, 217, 211, 0.7)",
        border: "1px solid #60BBB6",
        borderRadius: 8,
        padding: 8,
        marginHorizontal: 100,
    },
    textButton: {
        fontWeight: "700",
        fontSize: 16,
        lineHeight: 22,
        textAlign: "center",
        padding: 0,
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
    button:{
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius:50,
        marginTop: 10,
        marginBottom: 15,
        backgroundColor: "lightgrey",
    },
});
