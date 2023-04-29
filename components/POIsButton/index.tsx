import { TouchableOpacity, View, Text, useColorScheme, Image } from "react-native";
import { styles } from "./styles";
import { useRouter } from "expo-router";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export const POIsButton = ({ title, icon, date, image, newNavigation }: Props) => {
    const navigation = useRouter();
    const colorScheme = useColorScheme();
    const textColor = colorScheme === "light" ? styles.textLight : styles.textDark;
    const containerColor = colorScheme === "light" ? styles.containerLight : styles.containerDark;
    const imageColor = colorScheme === "light" ? styles.imageLight : styles.imageDark;

    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.push(newNavigation)}
            style={[styles.container, containerColor]}
        >
            <View style={styles.view}>
                <FontAwesomeIcon icon={icon} size={28} color="#60BBB6" style={textColor} />

                {/* Text */}
                <View style={styles.textView}>
                    <Text style={[styles.title, textColor]}>{title}</Text>
                    <Text style={[styles.view, textColor]}>{date}</Text>
                </View>
                {image && <Image source={image} style={[styles.image, imageColor]} />}
            </View>
        </TouchableOpacity>
    );
};

interface Props {
    date: string;
    icon: IconDefinition;
    title: string;
    image: any;
    newNavigation: string;
}
