import { TouchableOpacity, View, Text, useColorScheme } from "react-native";
import { useRouter } from "expo-router";
import { styles } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export const LinkButton = ({ newNavigation, title, icon }: Props) => {
    const navigation = useRouter();
    const colorScheme = useColorScheme();
    const textStyle =
        colorScheme === "light" ? styles.textLight : styles.textDark;
    const containerStyle =
        colorScheme === "light" ? styles.containerLight : styles.containerDark;

    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.push(newNavigation)}
            style={[styles.appButtonContainer, containerStyle]}
        >
            <View style={styles.appButtonView}>
                <FontAwesomeIcon icon={icon} size={22} style={textStyle} />
                <Text style={[styles.appButtonText, textStyle]}>{title}</Text>
                <FontAwesomeIcon
                    icon={faChevronRight}
                    size={16}
                    style={textStyle}
                />
            </View>
        </TouchableOpacity>
    );
};

interface Props {
    icon: IconDefinition;
    newNavigation: string;
    title: string;
}
