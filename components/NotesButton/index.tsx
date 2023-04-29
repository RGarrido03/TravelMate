import { TouchableOpacity, View, Text, useColorScheme, Image } from "react-native";
import { useRouter } from "expo-router";
import { styles } from "./styles";

export const ListItem = ({ newNavigation, subtitle, title, image }: Props) => {
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
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <View style={{ flex: 1 }}>
                    <Text style={[styles.title, textColor]}>{title}</Text>
                    <Text numberOfLines={1} style={textColor}>
                        {subtitle}
                    </Text>
                </View>
                {image && <Image style={[styles.image, imageColor]} source={image}></Image>}
            </View>
        </TouchableOpacity>
    );
};

interface Props {
    newNavigation: string;
    subtitle: string;
    title: string;
    image: any;
}