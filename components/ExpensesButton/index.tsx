import { TouchableOpacity, View, Text, useColorScheme } from "react-native";
import { useRouter } from "expo-router";
import { styles } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export const ExpensesButton = ({title, icon, cost }: Props) => {
    const navigation = useRouter();
    const colorScheme = useColorScheme();
    const textStyle =
        colorScheme === "light" ? styles.textLight : styles.textDark;
    const containerStyle =
        colorScheme === "light" ? styles.containerLight : styles.containerDark;

    return (
        <TouchableOpacity
            activeOpacity={0.5}
            style={[styles.appButtonContainer, containerStyle]}
        >
            <View style={styles.appButtonView}>
                <FontAwesomeIcon icon={icon} size={22} style={textStyle} />
                <Text style={[styles.appButtonText, textStyle]}>{title}</Text>
                <View style={styles.textBox}>
                    <Text style={styles.cost}>{cost}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

interface Props {
    icon: IconDefinition;
    title: string;
    cost: number;
}
