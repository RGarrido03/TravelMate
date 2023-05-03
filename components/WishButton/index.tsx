import { TouchableOpacity, View, Text, useColorScheme } from "react-native";
import { styles } from "./styles";
import { useRouter } from "expo-router";


export const WishButton = ({ city, newNavigation }: Props) => {
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
                </View>
            </View>
        </TouchableOpacity>
    );
};

interface Props {
    city: string;
    newNavigation: string;
}
