import { Stack } from "expo-router";
import { ColorSchemeName, Text, TouchableOpacity, useColorScheme } from "react-native";

export default function Layout() {
    const colorScheme: ColorSchemeName = useColorScheme();
    const textColor: string = colorScheme === "light" ? "#000" : "#fff";

    return (
        <Stack
            /* Light/dark mode support, slay bitches */
            screenOptions={{
                headerStyle: {
                    backgroundColor: colorScheme === "light" ? "#E8F3F4" : "#33625F",
                },
                headerTitleStyle: {
                    color: textColor,
                },
                contentStyle: {
                    backgroundColor: colorScheme === "light" ? "#fff" : "#000",
                },
            }}
        >
            <Stack.Screen
                name="index"
                options={{
                    title: "TravelMate",
                }}
            />
            <Stack.Screen
                name="photos/index"
                options={{
                    title: "Photos",
                }}
            />
            <Stack.Screen
                name="notes/index"
                options={{
                    title: "Notes",
                }}
            />
            <Stack.Screen
                name="expenses/index"
                options={{
                    title: "Expenses",
                }}
            />
            <Stack.Screen
                name="pois/index"
                options={{
                    title: "POIs",
                }}
            />
            <Stack.Screen
                name="note/index"
                options={{
                    title: "Note",
                    headerTitleStyle: {
                        fontWeight: "800",
                    },
                    headerRight: () => (
                        <TouchableOpacity style={{ marginRight: 10 }}>
                            <Text>Date</Text>
                        </TouchableOpacity>
                    ),
                }}
            />
        </Stack>
    );
}

export const unstable_settings = {
    initialRouteName: "index",
};
