import { Animated, Image, Text, TouchableOpacity, useColorScheme, View } from "react-native";
import { styles } from "./styles";
import { useRouter } from "expo-router";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { useState, useEffect } from "react";

export const POIsButton = ({ title, icon, date, image, newNavigation }: Props) => {
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
    }, [icon, date, title, image]);

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
        </Animated.View>
    );
};

interface Props {
    date: string;
    icon: IconDefinition;
    title: string;
    image: any;
    newNavigation: string;
}
