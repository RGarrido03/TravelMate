import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    Modal,
    TouchableOpacity,
    Pressable,
    Platform,
    KeyboardAvoidingView,
} from "react-native";
import { useColorScheme } from "react-native";
import { faCalendarDays, faCheck, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { styles } from "./styles";
import DateTimePicker from "@react-native-community/datetimepicker";
import { EdgeInsets, useSafeAreaInsets } from "react-native-safe-area-context";
import { BlurView } from "expo-blur";

interface props {
    visible: boolean;
    onClose: () => void;
    onAdd?: ({ title, date }: { title: string; date: string }) => void;
    onDelete?: () => void;
    onEdit?: ({ title, date }: { title: string; date: string }) => void;
    isAdd?: boolean;
    isEdit?: boolean;
    title: string;
    setTitle: (title: string) => void;
    date: string;
    setDate: (date: string) => void;
}

export const AddPoiModal = ({
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

    const handleAdd = (): void => {
        onAdd({ title, date });
        onClose();
        setTitle("");
        setDate("");
    };

    const handleEdit = (): void => {
        onEdit({ title, date });
        onClose();
        setTitle("");
        setDate("");
    };

    const handleDelete = (): void => {
        onDelete();
        onClose();
        setTitle("");
        setDate("");
    };

    const [datePicker, setDatePicker] = useState<Date>(new Date());
    const [showDatePicker, setShowDatePicker] = useState<boolean>(false);

    const toggleDatePicker = (): void => {
        setShowDatePicker(!showDatePicker);
    };

    const onChangeDatePicker = ({ type }, selectedDate): void => {
        if (type == "set") {
            const currentDate = selectedDate;
            setDatePicker(currentDate);
            Platform.OS === "android" && toggleDatePicker();
            setDate(currentDate.toDateString());
        } else {
            toggleDatePicker();
        }
    };

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
                            {isAdd ? "New" : "Edit"} POI
                        </Text>
                        <TouchableOpacity onPress={onClose}>
                            <FontAwesomeIcon icon={faClose} size={22} color={textColor.color} />
                        </TouchableOpacity>
                    </View>

                    <Text style={[styles.textSecondary, textColor]}>Title</Text>
                    <TextInput
                        value={title}
                        onChangeText={setTitle}
                        placeholder="Title"
                        style={[styles.textInput, textInputColor, textColor]}
                        placeholderTextColor={placeholderTextColor.color}
                    />
                    <Text style={[styles.textSecondary, textColor]}>Date</Text>
                    <View style={[styles.textInputIcon, styles.textInput, textInputColor]}>
                        {showDatePicker && (
                            <DateTimePicker
                                mode="date"
                                display="spinner"
                                value={datePicker}
                                onChange={onChangeDatePicker}
                                style={styles.datePicker}
                            />
                        )}
                        {!showDatePicker ? (
                            <>
                                <Pressable onPress={toggleDatePicker} style={{ flex: 1 }}>
                                    <TextInput
                                        value={date}
                                        onChangeText={setDate}
                                        placeholder="Date (dd/mm/aaaa)"
                                        editable={false}
                                        onPressIn={toggleDatePicker}
                                        style={textColor}
                                        placeholderTextColor={placeholderTextColor.color}
                                    />
                                </Pressable>
                                <FontAwesomeIcon
                                    icon={faCalendarDays}
                                    size={20}
                                    color={textColor.color}
                                />
                            </>
                        ) : (
                            <Pressable onPress={toggleDatePicker}>
                                <FontAwesomeIcon icon={faCheck} size={20} color={textColor.color} />
                            </Pressable>
                        )}
                    </View>

                    <View style={styles.buttonsView}>
                        {isAdd && (
                            <TouchableOpacity
                                style={[styles.buttonCommon, styles.buttonAdd]}
                                onPress={handleAdd}
                            >
                                <Text style={[styles.textButton, textColor]}>Add</Text>
                            </TouchableOpacity>
                        )}
                        {isEdit && (
                            <TouchableOpacity
                                style={[styles.buttonCommon, styles.buttonAdd]}
                                onPress={handleEdit}
                            >
                                <Text style={[styles.textButton, textColor]}>Edit</Text>
                            </TouchableOpacity>
                        )}
                        {isEdit && (
                            <TouchableOpacity
                                style={[styles.buttonCommon, styles.buttonDelete]}
                                onPress={handleDelete}
                            >
                                <Text style={[styles.textButton, textColor]}>Delete</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                </BlurView>
            </KeyboardAvoidingView>
        </Modal>
    );
};
