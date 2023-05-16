export default () => ({
    expo: {
        name: "TravelMate",
        slug: "travelmate",
        version: "1.0.0",
        orientation: "portrait",
        icon: "./assets/icon.png",
        userInterfaceStyle: "automatic",
        splash: {
            image: "./assets/splash.png",
            resizeMode: "contain",
            backgroundColor: "#ffffff",
        },
        assetBundlePatterns: ["**/*"],
        ios: {
            supportsTablet: true,
            bundleIdentifier: "com.rgarrido03.travelmate",
            config: {
                googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
            },
        },
        android: {
            adaptiveIcon: {
                foregroundImage: "./assets/adaptive-icon.png",
                backgroundColor: "#ffffff",
            },
            package: "com.rgarrido03.travelmate",
            config: {
                googleMaps: {
                    apiKey: process.env.GOOGLE_MAPS_API_KEY,
                },
            },
        },
        web: {
            favicon: "./assets/favicon.png",
            bundler: "metro",
            config: {
                resolve: {
                    alias: {
                        "react-native-maps": "@teovilla/react-native-web-maps",
                    },
                },
            },
        },
        extra: {
            eas: {
                projectId: "ed8ac1ae-e594-4880-aa5a-bede51f14e2c",
            },
        },
        owner: "rgarrido03",
        runtimeVersion: {
            policy: "sdkVersion",
        },
        updates: {
            url: "https://u.expo.dev/ed8ac1ae-e594-4880-aa5a-bede51f14e2c",
        },
        scheme: "travelmate",
    },
});
