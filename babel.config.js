module.exports = function (api) {
    const platform = api.caller((caller) => caller?.platform);
    console.log(platform); // web, ios, android
    api.cache(true);

    return {
        presets: ["babel-preset-expo", "@babel/typescript"],
        plugins: [
            require.resolve("expo-router/babel"),
            "@babel/plugin-proposal-export-namespace-from",
            [
                "react-native-reanimated/plugin",
                {
                    relativeSourceLocation: true,
                },
            ],
            [
                "module-resolver",
                {
                    alias: {
                        "react-native-maps":
                            platform === "web"
                                ? "@teovilla/react-native-web-maps"
                                : "react-native-maps",
                    },
                },
            ],
        ],
    };
};
