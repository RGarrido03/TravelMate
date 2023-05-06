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

export const AddNotesModal = ({
    visible,
    onClose,
    onSave,
    text,
    title,
    setText,
    setTitle,
    content,
    setContent,
}) => {
    const insets: EdgeInsets = useSafeAreaInsets(); // SafeAreaView dimensions

    const handleSave = (): void => {
        onSave({ title, text, content });
        onClose();
        setText("");
        setTitle("");
        setContent("");
    };

    const handleClose = (): void => {
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
                <BlurView
                    style={[styles.modalContent, modalContentColor]}
                    blurReductionFactor={2}
                    tint={isLightMode ? "light" : "dark"}
                >
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
                        value={title}
                        onChangeText={setTitle}
                        placeholder="Title"
                        style={[styles.textInput, textBoxColor, textColor, { marginBottom: 16 }]}
                        multiline={false}
                        placeholderTextColor={placeholderTextColor.color}
                    />
                    <TextInput
                        value={content}
                        onChangeText={setContent}
                        placeholder="Subtitle"
                        style={[styles.textInput, textBoxColor, textColor, { marginBottom: 16 }]}
                        multiline={false}
                        placeholderTextColor={placeholderTextColor.color}
                    />

                    <TextInput
                        value={text}
                        onChangeText={setText}
                        placeholder="Notes"
                        style={[
                            styles.textInput,
                            textBoxColor,
                            textColor,
                            { height: 200, textAlignVertical: "top" },
                        ]}
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
