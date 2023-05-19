import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    Modal,
    TouchableOpacity,
    Pressable,
    KeyboardAvoidingView,
    Platform,
} from "react-native";
import { useColorScheme } from "react-native";
import { faCalendarDays, faClose, faEuroSign, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { styles } from "./styles";
import DateTimePicker from "@react-native-community/datetimepicker";
import { EdgeInsets, useSafeAreaInsets } from "react-native-safe-area-context";
import { BlurView } from "expo-blur";
import { Trips, addTrip, getCurrentTrips } from "../../data/trips";

interface props {
    visible: boolean;
    onClose: () => void;

    tripsArray: Trips[];
    setTripsArray: (trips: Trips[]) => void;
}

export const ModalTrip = ({ visible, onClose, tripsArray, setTripsArray }: props) => {
    // Styling
    const insets: EdgeInsets = useSafeAreaInsets(); // SafeAreaView dimensions
    const isLightMode: boolean = useColorScheme() === "light";
    const textInputColor = isLightMode ? styles.containerLight : styles.containerDark;
    const modalContentColor = isLightMode ? styles.modalContentLight : styles.modalContentDark;
    const textColor = isLightMode ? styles.textLight : styles.textDark;
    const placeholderTextColor = isLightMode
        ? styles.placeholderTextColorLight
        : styles.placeholderTextColorDark;

    // Form, using states
    const [city, setCity] = useState<string>("");
    const [startDate, setStartDate] = useState<string>("");
    const [endDate, setEndDate] = useState<string>("");
    const [lat, setLat] = useState<number>(0);
    const [lon, setLon] = useState<number>(0);
    const [budget, setBudget] = useState<number>(0);

    const handleAdd = (): void => {
        // Create a new temporary trip
        let temp: Trips = {
            city: city,
            date: startDate + " - " + endDate,
            budget: budget,
            lat: lat,
            lon: lon,
        };

        // Add the trip to the trips array
        setTripsArray([...getCurrentTrips(), temp]);
        addTrip(temp);

        // Close the modal
        onClose();

        // Clear the form
        setCity("");
        setLat(0);
        setLon(0);
        setBudget(0);
        setStartDate("");
        setEndDate("");
        console.log(getCurrentTrips());
    };

    const [datePickerStart, setDatePickerStart] = useState<Date>(new Date());
    const [showDatePickerStart, setShowDatePickerStart] = useState<boolean>(false);

    const [datePickerEnd, setDatePickerEnd] = useState<Date>(new Date());
    const [showDatePickerEnd, setShowDatePickerEnd] = useState<boolean>(false);

    const toggleDatePickerStart = (): void => {
        setShowDatePickerStart(!showDatePickerStart);
    };

    const toggleDatePickerEnd = (): void => {
        setShowDatePickerEnd(!showDatePickerEnd);
    };

    const onChangeDatePickerStart = ({ type }, selectedDate): void => {
        if (type == "set") {
            const currentDate = selectedDate;
            setDatePickerStart(currentDate);
            Platform.OS === "android" && toggleDatePickerStart();
            setStartDate(currentDate.toDateString());
        } else {
            toggleDatePickerStart();
        }
    };

    const onChangeDatePickerEnd = ({ type }, selectedDate): void => {
        if (type == "set") {
            const currentDate = selectedDate;
            setDatePickerEnd(currentDate);
            Platform.OS === "android" && toggleDatePickerEnd();
            setEndDate(currentDate.toDateString());
        } else {
            toggleDatePickerEnd();
        }
    };

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
                        <Text style={[styles.textPrincipal, textColor]}>New trip</Text>
                        <TouchableOpacity onPress={onClose}>
                            <FontAwesomeIcon icon={faClose} size={22} color={textColor.color} />
                        </TouchableOpacity>
                    </View>

                    {/* City */}
                    <Text style={[styles.textSecondary, textColor]}>City</Text>
                    <TextInput
                        value={city}
                        onChangeText={setCity}
                        placeholder="City"
                        style={[styles.textInput, textInputColor, textColor]}
                        placeholderTextColor={placeholderTextColor.color}
                    />

                    {/* Lat/lon */}
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <View style={{ width: "50%", paddingRight: 4 }}>
                            <Text style={[styles.textSecondary, textColor]}>Latitude</Text>
                            <TextInput
                                value={lat.toString()}
                                onChangeText={(text: string) => setLat(parseFloat(text))}
                                placeholder="0.00"
                                editable={false}
                                style={[styles.textInput, textInputColor, textColor]}
                                placeholderTextColor={placeholderTextColor.color}
                            />
                        </View>
                        <View style={{ width: "50%", paddingLeft: 4 }}>
                            <Text style={[styles.textSecondary, textColor]}>Longitude</Text>
                            <TextInput
                                value={lon.toString()}
                                onChangeText={(text: string) => setLon(parseFloat(text))}
                                placeholder="0.00"
                                editable={false}
                                style={[styles.textInput, textInputColor, textColor]}
                                placeholderTextColor={placeholderTextColor.color}
                            />
                        </View>
                    </View>

                    {/* Start date */}
                    <Text style={[styles.textSecondary, textColor]}>Start date</Text>
                    <View style={[styles.textInputIcon, styles.textInput, textInputColor]}>
                        {showDatePickerStart && (
                            <DateTimePicker
                                mode="date"
                                display="spinner"
                                value={datePickerStart}
                                onChange={onChangeDatePickerStart}
                                style={styles.datePicker}
                            />
                        )}

                        {!showDatePickerStart ? (
                            <>
                                <Pressable onPress={toggleDatePickerStart} style={{ flex: 1 }}>
                                    <TextInput
                                        value={startDate}
                                        onChangeText={setStartDate}
                                        placeholder="Date (dd/mm/aaaa)"
                                        editable={false}
                                        onPressIn={toggleDatePickerStart}
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
                            <Pressable onPress={toggleDatePickerStart}>
                                <FontAwesomeIcon icon={faCheck} size={20} color={textColor.color} />
                            </Pressable>
                        )}
                    </View>

                    {/* End date */}
                    <Text style={[styles.textSecondary, textColor]}>End date</Text>
                    <View style={[styles.textInputIcon, styles.textInput, textInputColor]}>
                        {showDatePickerEnd && (
                            <DateTimePicker
                                mode="date"
                                display="spinner"
                                value={datePickerEnd}
                                onChange={onChangeDatePickerEnd}
                                style={styles.datePicker}
                            />
                        )}

                        {!showDatePickerEnd ? (
                            <>
                                <Pressable onPress={toggleDatePickerEnd} style={{ flex: 1 }}>
                                    <TextInput
                                        value={endDate}
                                        onChangeText={setEndDate}
                                        placeholder="Date (dd/mm/aaaa)"
                                        editable={false}
                                        onPressIn={toggleDatePickerEnd}
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
                            <Pressable onPress={toggleDatePickerEnd}>
                                <FontAwesomeIcon icon={faCheck} size={20} color={textColor.color} />
                            </Pressable>
                        )}
                    </View>

                    {/* Budget */}
                    <Text style={[styles.textSecondary, textColor]}>Budget</Text>
                    <View style={[styles.textInputIcon, styles.textInput, textInputColor]}>
                        <TextInput
                            onChangeText={(value: string) =>
                                setBudget(isNaN(parseFloat(value)) ? 0 : parseFloat(value))
                            }
                            placeholder="0,00"
                            keyboardType="numeric"
                            style={[{ flex: 1 }, textColor]}
                            placeholderTextColor={placeholderTextColor.color}
                        />
                        <FontAwesomeIcon icon={faEuroSign} size={20} color={textColor.color} />
                    </View>

                    {/* Button */}
                    <View style={styles.buttonsView}>
                        <TouchableOpacity
                            style={[styles.buttonCommon, styles.buttonAdd]}
                            onPress={handleAdd}
                        >
                            <Text style={[styles.textButton, textColor]}>Add</Text>
                        </TouchableOpacity>
                    </View>
                </BlurView>
            </KeyboardAvoidingView>
        </Modal>
    );
};
