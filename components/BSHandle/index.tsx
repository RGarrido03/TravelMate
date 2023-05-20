import React, { useMemo } from "react";
import { StyleProp, StyleSheet, useColorScheme, ViewStyle } from "react-native";
import { BottomSheetHandleProps } from "@gorhom/bottom-sheet";
import Animated, {
    Extrapolate,
    interpolate,
    useAnimatedStyle,
    useDerivedValue,
} from "react-native-reanimated";
import { toRad } from "react-native-redash";
import { BlurView } from "expo-blur";

// @ts-ignore
export const transformOrigin = ({ x, y }, ...transformations) => {
    "worklet";
    return [
        { translateX: x },
        { translateY: y },
        ...transformations,
        { translateX: x * -1 },
        { translateY: y * -1 },
    ];
};

interface HandleProps extends BottomSheetHandleProps {
    style?: StyleProp<ViewStyle>;
}

const Handle: React.FC<HandleProps> = ({ style, animatedIndex }) => {
    const isLightMode: boolean = useColorScheme() === "light";

    const styles = StyleSheet.create({
        header: {
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "transparent",
            paddingVertical: 14,
        },
        indicator: {
            position: "absolute",
            width: 10,
            height: 4,
            backgroundColor: isLightMode ? "#3B4949" : "#fff",
        },
        leftIndicator: {
            borderTopStartRadius: 2,
            borderBottomStartRadius: 2,
        },
        rightIndicator: {
            borderTopEndRadius: 2,
            borderBottomEndRadius: 2,
        },
        blurView: {
            overflow: "hidden",
            borderTopEndRadius: 16,
            borderTopLeftRadius: 16,
        },
    });

    //#region animations
    const indicatorTransformOriginY = useDerivedValue(() =>
        interpolate(animatedIndex.value, [0, 1, 2], [-1, 0, 1], Extrapolate.CLAMP)
    );
    //#endregion

    //#region styles
    const containerStyle = useMemo(() => [styles.header, style], [style]);
    const containerAnimatedStyle = useAnimatedStyle(() => {
        const borderTopRadius = interpolate(
            animatedIndex.value,
            [1, 2],
            [20, 0],
            Extrapolate.CLAMP
        );
        return {
            borderTopLeftRadius: borderTopRadius,
            borderTopRightRadius: borderTopRadius,
        };
    });
    const leftIndicatorStyle = useMemo(
        () => ({
            ...styles.indicator,
            ...styles.leftIndicator,
        }),
        []
    );
    const leftIndicatorAnimatedStyle = useAnimatedStyle(() => {
        const leftIndicatorRotate = interpolate(
            animatedIndex.value,
            [0, 1, 2],
            [toRad(-30), 0, toRad(30)],
            Extrapolate.CLAMP
        );
        return {
            transform: transformOrigin(
                { x: 0, y: indicatorTransformOriginY.value },
                {
                    rotate: `${leftIndicatorRotate}rad`,
                },
                {
                    translateX: -5,
                }
            ),
        };
    });
    const rightIndicatorStyle = useMemo(
        () => ({
            ...styles.indicator,
            ...styles.rightIndicator,
        }),
        []
    );
    const rightIndicatorAnimatedStyle = useAnimatedStyle(() => {
        const rightIndicatorRotate = interpolate(
            animatedIndex.value,
            [0, 1, 2],
            [toRad(30), 0, toRad(-30)],
            Extrapolate.CLAMP
        );
        return {
            transform: transformOrigin(
                { x: 0, y: indicatorTransformOriginY.value },
                {
                    rotate: `${rightIndicatorRotate}rad`,
                },
                {
                    translateX: 5,
                }
            ),
        };
    });
    //#endregion

    // render
    return (
        <BlurView
            blurReductionFactor={2}
            tint={isLightMode ? "light" : "dark"}
            style={styles.blurView}
        >
            <Animated.View
                style={[containerStyle, containerAnimatedStyle]}
                renderToHardwareTextureAndroid={true}
            >
                <Animated.View style={[leftIndicatorStyle, leftIndicatorAnimatedStyle]} />
                <Animated.View style={[rightIndicatorStyle, rightIndicatorAnimatedStyle]} />
            </Animated.View>
        </BlurView>
    );
};

export default Handle;
