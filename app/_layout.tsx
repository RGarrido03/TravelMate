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
                name="notes/note0/index"
                options={{
                    title: "Note",
                    headerTitleStyle: {
                        fontWeight: "800", // Isn't this inconsistent?
                        color: textColor,
                    },
                    headerRight: () => (
                        <Text style={{ color: textColor }}>
                            11/08/2022
                        </Text>
                    ),
                }}
            />
            <Stack.Screen
                name="notes/note1/index"
                options={{
                    title: "Note",
                    headerTitleStyle: {
                        fontWeight: "800", // Isn't this inconsistent?
                        color: textColor,
                    },
                    headerRight: () => (
                        <Text style={{ color: textColor }}>
                            09/08/2022
                        </Text>
                    ),
                }}
            />
            <Stack.Screen
                name="notes/note2/index"
                options={{
                    title: "Note",
                    headerTitleStyle: {
                        fontWeight: "800", // Isn't this inconsistent?
                        color: textColor,
                    },
                    headerRight: () => (
                        <Text style={{ color: textColor }}>
                            09/08/2022
                        </Text>
                    ),
                }}
            />
            <Stack.Screen
                name="photos/photo/index"
                options={{
                    title: "Photo",
                    headerRight: () => (
                        <Text style={{ color: textColor }}>
                            <Text style={{ fontWeight: "500" }}>Date</Text> Hour
                        </Text>
                    ),
                }}
            />
            <Stack.Screen
                name="pois/poi2/index"
                options={{
                    title: "POI",
                }}
            />
            <Stack.Screen
                name="pois/poi1/index"
                options={{
                    title: "POI",
                }}
            />
            <Stack.Screen
                name="pois/poi0/index"
                options={{
                    title: "POI",
                }}
            />
        </Stack>
    );
}

export const unstable_settings = {
    initialRouteName: "index",
};
