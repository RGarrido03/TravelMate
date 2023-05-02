import { TouchableOpacity, View, Text, useColorScheme } from "react-native";
import { styles } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { useRouter } from "expo-router";

export const ExpensesButton = ({ title, icon, cost, date, newNavigation }: Props) => {
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
                <FontAwesomeIcon icon={icon} size={22} style={textColor} />

                {/* Text */}
                <View style={styles.textView}>
                    <Text style={[styles.title, textColor]}>{title}</Text>
                    <Text style={textColor}>{date}</Text>
                </View>

                {/* Cost */}
                <View style={[styles.textBox, cost < 500 ? styles.textBoxLow : styles.textBoxHigh]}>
                    <Text style={styles.cost}>
                        {cost.toLocaleString("pt-PT", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                        })}
                        €
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

interface Props {
    date: string;
    icon: IconDefinition;
    title: string;
    cost: number;
    newNavigation: string;
}
