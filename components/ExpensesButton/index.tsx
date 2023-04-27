import { TouchableOpacity, View, Text, useColorScheme } from "react-native";
import { styles } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export const ExpensesButton = ({ title, icon, cost, date }: Props) => {
    const colorScheme = useColorScheme();
    const textColor = colorScheme === "light" ? styles.textLight : styles.textDark;
    const containerColor = colorScheme === "light" ? styles.containerLight : styles.containerDark;

    return (
        <TouchableOpacity activeOpacity={0.5} style={[styles.container, containerColor]}>
            <View style={styles.view}>
                <FontAwesomeIcon icon={icon} size={22} style={textColor} />

                {/* Text */}
                <View style={styles.textView}>
                    <Text style={[styles.title, textColor]}>{title}</Text>
                    <Text style={textColor}>{date.toDateString()}</Text>
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
    date: Date;
    icon: IconDefinition;
    title: string;
    cost: number;
}
