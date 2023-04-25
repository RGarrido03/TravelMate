import { TouchableOpacity, View, Text } from "react-native";
import { useRouter } from "expo-router";
import { styles } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export const LinkButton = ({ newNavigation, title, icon }: Props) => {
    const navigation = useRouter();

    return (
        <TouchableOpacity
            onPress={() => navigation.push(newNavigation)}
            style={styles.appButtonContainer}
        >
            <View style={styles.appButtonView}>
                <FontAwesomeIcon icon={icon} size={22} />
                <Text style={styles.appButtonText}>{title}</Text>
                <FontAwesomeIcon icon={faChevronRight} size={16} />
            </View>
        </TouchableOpacity>
    );
};

interface Props {
    icon: IconDefinition;
    newNavigation: string;
    title: string;
}
