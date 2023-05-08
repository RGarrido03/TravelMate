import React from "react";
import {
    View,
    Text,
    TextInput,
    Modal,
    TouchableOpacity,
    useColorScheme,
    KeyboardAvoidingView,
} from "react-native";
import { faClose, faEuroSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { styles } from "./styles";
import { BlurView } from "expo-blur";
import { EdgeInsets, useSafeAreaInsets } from "react-native-safe-area-context";

export const BudgetModal = ({ visible, onClose, onSave, budget, setBudget }: Props) => {
    const insets: EdgeInsets = useSafeAreaInsets(); // SafeAreaView dimensions

    const handleClose = (): void => {
        onClose();
    };

    const handleSave = (): void => {
        onSave({ budget });
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
                <BlurView style={[styles.modalContent, modalContentColor]} blurReductionFactor={2}>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            marginBottom: 16,
                        }}
                    >
                        <Text style={[styles.textPrincipal, textColor]}>Budget Settings</Text>
                        <TouchableOpacity onPress={handleClose}>
                            <FontAwesomeIcon icon={faClose} size={22} color={textColor.color} />
                        </TouchableOpacity>
                    </View>
                    <Text style={[styles.textSecondary, textColor]}>New amount</Text>
                    <View style={[styles.textInputIcon, styles.textInput, textBoxColor]}>
                        <TextInput
                            value={budget}
                            onChangeText={setBudget}
                            placeholder="0,00"
                            keyboardType="numeric"
                            style={[{ flex: 1 }, textColor]}
                            placeholderTextColor={placeholderTextColor.color}
                        />
                        <FontAwesomeIcon icon={faEuroSign} size={20} color={textColor.color} />
                    </View>

                    <View style={styles.buttonsView}>
                        <TouchableOpacity
                            activeOpacity={0.5}
                            style={[styles.button, styles.buttonAdd]}
                            onPress={handleSave}
                        >
                            <Text style={[styles.textButton, textColor]}>Edit</Text>
                        </TouchableOpacity>
                    </View>
                </BlurView>
            </KeyboardAvoidingView>
        </Modal>
    );
};

interface Props {
    visible: boolean;
    onClose: () => void;
    onSave: (budget: { budget: string }) => void;
    budget: string;
    setBudget: (budget: string) => void;
}
