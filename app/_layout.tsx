import { Stack } from "expo-router";
import { useColorScheme } from "react-native";

export default function Layout() {
    const isLightMode: boolean = useColorScheme() === "light";

    return (
        <Stack
            screenOptions={{
                contentStyle: {
                    backgroundColor: isLightMode ? "#fff" : "#000",
                },
                headerShown: false,
            }}
            initialRouteName={"index"}
        ></Stack>
    );
}
