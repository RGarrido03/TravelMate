import React from "react";
import {
    View,
    Text,
    TextInput,
    Modal,
    TouchableOpacity,
    KeyboardAvoidingView,
} from "react-native";
import { useColorScheme } from "react-native";
import { faCalendarDays, faClose, faEuro, faRunning, faUser} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { styles } from "./styles";
import { EdgeInsets, useSafeAreaInsets } from "react-native-safe-area-context";
import { BlurView } from "expo-blur";
import { LinkButton, LinkButton2 } from "../LinkButton";

interface props {
    visible: boolean;
    onClose: () => void;
    onAdd?: ({ title, date }: { title: string; date: string }) => void;
    onDelete?: () => void;
    onEdit?: ({ title,  date }: { title: string; date: string }) => void;
    isAdd?: boolean;
    isEdit?: boolean;
    title: string;
    setTitle: (title: string) => void;
    date: string;
    setDate: (date: string) => void;
}

export const UserModal = ({
    visible,
    onClose,
    onAdd,
    onDelete,
    isAdd,
    isEdit,
    onEdit,
    title,
    setTitle,
    date,
    setDate,
}: props) => {
    const insets: EdgeInsets = useSafeAreaInsets(); // SafeAreaView dimensions

    const isLightMode: boolean = useColorScheme() === "light";
    const textInputColor = isLightMode ? styles.containerLight : styles.containerDark;
    const modalContentColor = isLightMode ? styles.modalContentLight : styles.modalContentDark;
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
                        }}
                    >
                        <Text style={[styles.textPrincipal, textColor]}>
                            Welcome Back, Joseph!
                        </Text>
                        <TouchableOpacity onPress={onClose}>
                            <FontAwesomeIcon icon={faClose} size={22} color={textColor.color} />
                        </TouchableOpacity>
                    </View>
                    
                    <View style={styles.view}>
                        <LinkButton icon={faUser} title={"Edit profile"}></LinkButton>
                        <LinkButton icon={faEuro} title={"Pay us a coffe"}></LinkButton>
                        <LinkButton2 icon={faRunning} title={"Logout"}></LinkButton2>
                    </View>
                </BlurView>
            </KeyboardAvoidingView>
        </Modal>
    );
};
