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
import { faCalendarDays, faClose, faEuroSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { styles } from "./styles";
import DateTimePicker from "@react-native-community/datetimepicker";
import { EdgeInsets, useSafeAreaInsets } from "react-native-safe-area-context";
import { BlurView } from "expo-blur";

export const AddExpenseModal = ({ visible, onClose, onSave }) => {
    const insets: EdgeInsets = useSafeAreaInsets(); // SafeAreaView dimensions

    const [title, setTitle] = useState("");
    const [value, setValue] = useState("");
    const [date, setDate] = useState("");
    const handleSave = (): void => {
        onSave({ title, value, date });
        onClose();
        setTitle("");
        setValue("");
        setDate("");
    };

    const [datePicker, setDatePicker] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);

    const toggleDatePicker = (): void => {
        setShowDatePicker(!showDatePicker);
    };

    const onChangeDatePicker = ({ type }, selectedDate): void => {
        if (type == "set") {
            const currentDate = selectedDate;
            setDatePicker(currentDate);
            if (Platform.OS === "android") {
                toggleDatePicker();
                setDate(currentDate.toDateString());
            }
        } else {
            toggleDatePicker();
        }
    };

    const confirmIOSDate = (): void => {
        setDate(datePicker.toDateString());
        toggleDatePicker();
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
                <BlurView style={[styles.modalContent, modalContentColor]}>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                    >
                        <Text style={[styles.textPrincipal, textColor]}>New Expense</Text>
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
                        {showDatePicker && Platform.OS === "ios" && (
                            <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                                <TouchableOpacity
                                    style={[
                                        styles.button,
                                        styles.pickerButton,
                                        { backgroundColor: "#11182711" },
                                    ]}
                                >
                                    <Text style={[styles.textButton]}>Cancel</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[styles.button, styles.pickerButton]}
                                    onPress={confirmIOSDate}
                                >
                                    <Text style={[styles.textButton]}>Confirm</Text>
                                </TouchableOpacity>
                            </View>
                        )}

                        <Pressable onPress={toggleDatePicker} style={{ flex: 1 }}>
                            <TextInput
                                value={date}
                                onChangeText={setDate}
                                placeholder="Date (dd/mm/aaaa)"
                                keyboardType="numeric"
                                editable={false}
                                onPressIn={toggleDatePicker}
                                style={textColor}
                                placeholderTextColor={placeholderTextColor.color}
                            />
                        </Pressable>
                        <FontAwesomeIcon icon={faCalendarDays} size={20} color={textColor.color} />
                    </View>

                    <Text style={[styles.textSecondary, textColor]}>Price</Text>
                    <View style={[styles.textInputIcon, styles.textInput, textInputColor]}>
                        <TextInput
                            value={value}
                            onChangeText={setValue}
                            placeholder="0,00"
                            keyboardType="numeric"
                            style={[{ flex: 1 }, textColor]}
                            placeholderTextColor={placeholderTextColor.color}
                        />
                        <FontAwesomeIcon icon={faEuroSign} size={20} color={textColor.color} />
                    </View>

                    <View style={styles.buttonsView}>
                        <TouchableOpacity style={styles.buttonAdd} onPress={handleSave}>
                            <Text style={styles.textButton}>Add</Text>
                        </TouchableOpacity>
                    </View>
                </BlurView>
            </KeyboardAvoidingView>
        </Modal>
    );
};
