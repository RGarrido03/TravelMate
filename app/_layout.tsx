import { Stack } from "expo-router";
import { ColorSchemeName, useColorScheme } from "react-native";

export default function Layout() {
    const colorScheme: ColorSchemeName = useColorScheme();

    return (
        <Stack
            screenOptions={{
                contentStyle: {
                    backgroundColor: colorScheme === "light" ? "#fff" : "#000",
                },
                headerShown: false,
            }}
            initialRouteName={"index"}
        ></Stack>
    );
}
