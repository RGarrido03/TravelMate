import { TouchableOpacity, View, Text, useColorScheme } from "react-native";
import { useRouter } from "expo-router";
import { styles } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export const LinkButton = ({ newNavigation, title, icon, onClick }: Props) => {
    const navigation = useRouter();
    const isLightMode: boolean = useColorScheme() === "light";
    const textColor = isLightMode ? styles.textLight : styles.textDark;
    const containerColor = isLightMode ? styles.containerLight : styles.containerDark;

    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={() =>
                newNavigation && typeof newNavigation === "string"
                    ? navigation.push(newNavigation)
                    : onClick && onClick()
            }
            style={[styles.container, containerColor]}
        >
            <View style={styles.view}>
                <FontAwesomeIcon icon={icon} size={22} style={textColor} />
                <Text style={[styles.text, textColor]}>{title}</Text>
                <FontAwesomeIcon icon={faChevronRight} size={16} style={textColor} />
            </View>
        </TouchableOpacity>
    );
};

export const LinkButton2 = ({ newNavigation, title, icon, onClick }: Props) => {
    const navigation = useRouter();
    const isLightMode: boolean = useColorScheme() === "light";
    const textColor = isLightMode ? styles.textLight : styles.textDark;
    const containerColor = isLightMode ? styles.containerLight2 : styles.containerDark2;
    

    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={() =>
                newNavigation && typeof newNavigation === "string"
                    ? navigation.push(newNavigation)
                    : onClick && onClick()
            }
            style={[styles.container, containerColor]}
        >
            <View style={styles.view}>
                <FontAwesomeIcon icon={icon} size={22} style={textColor} />
                <Text style={[styles.text, textColor]}>{title}</Text>
                <FontAwesomeIcon icon={faChevronRight} size={16} style={textColor} />
            </View>
        </TouchableOpacity>
    );
};

interface Props {
    icon: IconDefinition;
    newNavigation?: string;
    title: string;
    onClick?: () => void;
}
