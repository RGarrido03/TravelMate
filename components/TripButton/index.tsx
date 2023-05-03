import { TouchableOpacity, View, Text, useColorScheme } from "react-native";
import { styles } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { useRouter } from "expo-router";
import {
    faCamera,
    faNoteSticky,
    faNotesMedical,
    faStickyNote,
} from "@fortawesome/free-solid-svg-icons";
import { faEvernote, faItunesNote, faNode } from "@fortawesome/free-brands-svg-icons";

export const TripsButton = ({ city, nPhotos, nNotes, date, newNavigation }: Props) => {
    const navigation = useRouter();
    const isLightMode: boolean = useColorScheme() === "light";
    const textColor = isLightMode ? styles.textLight : styles.textDark;
    const containerColor = isLightMode ? styles.containerLight : styles.containerDark;

    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.push(newNavigation)}
            style={[styles.container, containerColor]}
        >
            <View style={styles.view}>
                {/* Text */}
                <View style={styles.textView}>
                    <Text style={[styles.title, textColor]}>{city}</Text>
                    <Text style={[styles.subtitle, textColor]}>{date}</Text>
                </View>

                <View style={{ flexDirection: "column"  }}>
                    <View style={styles.notes}>
                        <Text style={[styles.info, textColor]}>{nPhotos}</Text>
                        <FontAwesomeIcon icon={faCamera} color="#3B4949" />
                    </View>
                    <View style={styles.notes}>
                        <Text style={[styles.info, textColor]}>{nNotes}</Text>
                        <FontAwesomeIcon icon={faNoteSticky} color="#3B4949" />
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
    newNavigation: string;
}
