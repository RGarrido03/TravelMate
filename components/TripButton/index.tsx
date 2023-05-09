import { TouchableOpacity, View, Text, useColorScheme } from "react-native";
import { styles } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useRouter } from "expo-router";
import { faCamera, faNoteSticky } from "@fortawesome/free-solid-svg-icons";

export const TripsButton = ({ city, nPhotos, nNotes, date, onPress }: Props) => {
    const navigation = useRouter();
    const isLightMode: boolean = useColorScheme() === "light";
    const textColor = isLightMode ? styles.textLight : styles.textDark;
    const containerColor = isLightMode ? styles.containerLight : styles.containerDark;

    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={onPress}
            style={[styles.container, containerColor]}
        >
            <View style={styles.view}>
                {/* Text */}
                <View style={styles.textView}>
                    <Text style={[styles.title, textColor]}>{city}</Text>
                    <Text style={[styles.subtitle, textColor]}>{date}</Text>
                </View>

                <View style={{ flexDirection: "column" }}>
                    <View style={styles.notes}>
                        <Text style={[styles.info, textColor]}>{nPhotos}</Text>
                        <FontAwesomeIcon icon={faCamera} style={textColor} />
                    </View>
                    <View style={styles.notes}>
                        <Text style={[styles.info, textColor]}>{nNotes}</Text>
                        <FontAwesomeIcon icon={faNoteSticky} style={textColor} />
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

interface Props {
    date: string;
    city: string;
    nPhotos: number;
    nNotes: number;
    onPress: any;
}
