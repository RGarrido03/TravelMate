import { Stack } from "expo-router";
import { Button, ColorSchemeName, useColorScheme } from "react-native";

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
        >
            <Stack.Screen
                name="expenses/index"
                options={{
                    title: "Expenses",
                    headerRight: () => (
                        <Button
                            onPress={() => alert("This is a button!")}
                            title=" + "
                            color="black"
                        />
                    ),
                }}
            />
        </Stack>
    );
}
