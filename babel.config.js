module.exports = function (api) {
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
        ],
    };
};
