import { TouchableOpacity, View, Text, useColorScheme, Image, Animated } from "react-native";
import { useRouter } from "expo-router";
import { styles } from "./styles";
import { useEffect, useState } from "react";

export const NotesButton = ({ newNavigation, subtitle, title, image }: Props) => {
    const navigation = useRouter();
    const isLightMode: boolean = useColorScheme() === "light";
    const textColor = isLightMode ? styles.textLight : styles.textDark;
    const containerColor = isLightMode ? styles.containerLight : styles.containerDark;
    const imageColor = isLightMode ? styles.imageLight : styles.imageDark;

    const [animatedValue, setAnimatedValue] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(animatedValue, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
        }).start();
    }, [subtitle, title, image]);

    const animatedStyle = {
        transform: [{ scale: animatedValue }],
    };

    return (
        <Animated.View style={[animatedStyle]}>
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
        </Animated.View>
    );
};

interface Props {
    newNavigation: string;
    subtitle: string;
    title: string;
    image: any;
}
