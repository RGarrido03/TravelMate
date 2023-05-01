import React, { useState } from "react";
import { View, Text, TextInput, Modal, TouchableOpacity, Pressable, Platform } from "react-native";
import { useColorScheme } from "react-native";
import { faCalendarDays, faClose, faEuroSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { styles } from "./styles";
import DateTimePicker from "@react-native-community/datetimepicker";

export const AddExpenseModal = ({ visible, onClose, onSave }) => {
    const [title, setTitle] = useState("");
    const [value, setValue] = useState("");
    const [date, setDate] = useState("");
    const handleSave = () => {
        onSave({ title, value, date });
        setTitle("");
        setValue("");
        setDate("");
    };

    const [datePicker, setDatePicker] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);

    const toggleDatePicker = () => {
        setShowDatePicker(!showDatePicker);
    };

    const onChangeDatePicker = ({ type }, selectedDate) => {
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

    const confirmIOSDate = () => {
        setDate(datePicker.toDateString());
        toggleDatePicker();
    };

    const colorScheme = useColorScheme();
    const textInputColor = colorScheme === "light" ? styles.containerLight : styles.containerDark;

    return (
        <Modal visible={visible} animationType="slide" transparent={true}>
            <TouchableOpacity style={styles.modalBackground} onPress={onClose} />
            <View style={styles.modalContent}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={styles.textPrincipal}>New Expense</Text>
                    <TouchableOpacity onPress={onClose}>
                        <FontAwesomeIcon icon={faClose} size={22} />
                    </TouchableOpacity>
                </View>

                <Text style={styles.textSecondary}>Title</Text>
                <TextInput
                    value={title}
                    onChangeText={setTitle}
                    placeholder="Title"
                    style={[styles.textInput, textInputColor]}
                />
                <Text style={styles.textSecondary}>Date</Text>
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

                    <Pressable onPress={toggleDatePicker}>
                        <TextInput
                            value={date}
                            onChangeText={setDate}
                            placeholder="Date (dd/mm/aaaa)"
                            keyboardType="numeric"
                            editable={false}
                            onPressIn={toggleDatePicker}
                            style={{ paddingRight: 150 }}
                        />
                    </Pressable>
                    <Text style={{ fontSize: 20, marginRight: 5 }}>
                        <FontAwesomeIcon icon={faCalendarDays} />
                    </Text>
                </View>

                <Text style={styles.textSecondary}>Price</Text>
                <View style={[styles.textInputIcon, styles.textInput, textInputColor]}>
                    <TextInput
                        value={value}
                        onChangeText={setValue}
                        placeholder="0,00"
                        keyboardType="numeric"
                        style={{ flex: 1 }}
                    />
                    <Text style={{ fontSize: 20, marginRight: 5 }}>
                        <FontAwesomeIcon icon={faEuroSign} />
                    </Text>
                </View>

                <View>
                    <TouchableOpacity style={styles.buttonAdd} onPress={handleSave}>
                        <Text style={styles.textButton}>Add</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};
