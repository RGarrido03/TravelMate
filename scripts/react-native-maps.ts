const { readFile, writeFile, copyFile } = require("fs").promises;

const main = async () => {
    console.log("📦 Creating alias of react-native-maps for web");
    const modulePath = "node_modules/react-native-maps";
    await writeFile(
        `${modulePath}/lib/index.web.js`,
        'export default require("../../react-native-web-maps/src/index.js").default;',
        "utf-8"
    );
    await copyFile(`${modulePath}/lib/index.d.ts`, `${modulePath}/lib/index.web.d.ts`);
    const pkg = JSON.parse(await readFile(`${modulePath}/package.json`));
    pkg["react-native"] = "lib/index.js";
    pkg["main"] = "lib/index.web.js";
    await writeFile(`${modulePath}/package.json`, JSON.stringify(pkg, null, 2), "utf-8");
    console.log("✅ script ran successfully");
};

main();
