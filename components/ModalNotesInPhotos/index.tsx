import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    Modal,
    TouchableOpacity,
    useColorScheme,
    KeyboardAvoidingView,
} from "react-native";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { styles } from "./styles";
import { BlurView } from "expo-blur";
import { EdgeInsets, useSafeAreaInsets } from "react-native-safe-area-context";
import { getCurrentImages } from "../../data/images";

export const AddNotesModal = ({ visible, onClose, onSave, index }) => {
    const insets: EdgeInsets = useSafeAreaInsets(); // SafeAreaView dimensions
    const [text, setText] = useState(getCurrentImages()[index].note);

    const handleSave = (): void => {
        onSave(text);
        onClose();
    };

    const handleClose = (): void => {
        setText(getCurrentImages()[index].note);
        onClose();
    };

    const handleDelete = (): void => {
        onSave("");
        setText("");
        onClose();
    };

    const isLightMode: boolean = useColorScheme() === "light";
    const modalContentColor = isLightMode ? styles.modalContentLight : styles.modalContentDark;
    const textBoxColor = isLightMode ? styles.containerLight : styles.containerDark;
    const textColor = isLightMode ? styles.textLight : styles.textDark;
    const placeholderTextColor = isLightMode
        ? styles.placeholderTextColorLight
        : styles.placeholderTextColorDark;

    return (
        <Modal
            visible={visible}
            animationType="slide"
            transparent={true}
            hardwareAccelerated={true}
            statusBarTranslucent={true}
        >
            <KeyboardAvoidingView
                behavior={"padding"}
                style={styles.modalBackground}
                keyboardVerticalOffset={insets.top}
            >
                <BlurView style={[styles.modalContent, modalContentColor]}>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            marginBottom: 16,
                        }}
                    >
                        <Text style={[styles.textPrincipal, textColor]}>Notes</Text>
                        <TouchableOpacity onPress={handleClose}>
                            <FontAwesomeIcon icon={faClose} size={22} color={textColor.color} />
                        </TouchableOpacity>
                    </View>

                    <TextInput
                        value={text}
                        onChangeText={setText}
                        placeholder="Notes"
                        style={[styles.textInput, textBoxColor, textColor]}
                        multiline={true}
                        placeholderTextColor={placeholderTextColor.color}
                    />

                    <View style={styles.buttonsView}>
                        <TouchableOpacity
                            activeOpacity={0.5}
                            style={[styles.button, styles.buttonAdd]}
                            onPress={handleSave}
                        >
                            <Text style={[styles.textButton, textColor]}>Save</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.5}
                            style={[styles.button, styles.buttonDelete]}
                            onPress={handleDelete}
                        >
                            <Text style={[styles.textButton, textColor]}>Delete</Text>
                        </TouchableOpacity>
                    </View>
                </BlurView>
            </KeyboardAvoidingView>
        </Modal>
    );
};
