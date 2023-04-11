# TravelMate app

Project for "Interação Humano-Computador", 2022-2023.\
Check the web app at https://rgarrido03.github.io/TravelMate.

## ✍ Design
This app tightly follows the app prototype we made in Figma, which you can check [here](https://www.figma.com/proto/G9qqNCCqaahFK07umeDm0B/Low-level-prototype?node-id=64-2&starting-point-node-id=64%3A2).

It is inspired in both [Material Design 3](https://m3.material.io/) and [Fluent Design](https://www.microsoft.com/design/fluent/), and features design trends such as glassmorphism, in a fresh and modern UI.

The color palette is used as follows:

Color   | Name | Description
------- | ---- | -----------
#E8F3F4 | Lighter green | Used in menu headers
#BDF4F1 | Light green | No use for now
#70ECE4 | Accent green | Used in things that need to be noticed
#70D9D3 | Accent green #2 | No use for now
#60BBB6 | Dark green | Used in strokes, icons, buttons and more
#EB8C6F | Orange | Used for negative actions, such as deleting
#3B4949 | Dark gray | Used in some not-so-important text.
#000000 | Black | Used in headers and important text that needs to be noticed.
#FFFFFF | White | Every design needs white, periodt

A dark mode may or may not be in the backlog. 🙃

## 💻 Development
This is a React Native app created with Expo. Instead of using JavaScript (Expo's default programming language), this project uses [TypeScript](https://www.typescriptlang.org/) for type checking and more.

Before making any code changes after cloning the repo, be sure to have installed the Current version of Node.js. **Run `npm install` after cloning the repository, in order to install the project dependencies**.

To test the app on a mobile phone, first install the Expo Go app on your [Android](https://play.google.com/store/apps/details?id=host.exp.exponent) or [iOS](https://apps.apple.com/app/apple-store/id982107779) device.

By default, `npm run start` opens an interactive Expo server, where you can open the project in Expo Go (Android & iOS) or in a web browser. However, more options are available, and can be synthesized like this:

Command | Description
------- | -----------
npm run start | Start the Expo server, interactively, and run the app on Expo Go
npm run android | Run the app on an Android phone or Android Studio emulator
npm run ios | Run the app on an iPhone or Xcode emulator
npm run web | Run the app on a browser (usually http://localhost:19006)
npm run buildweb | Build the app for web

All logs will be displayed in the terminal window where you're running the server.

## 🚀 Deployment
**TL;DR: The app is automatically built for the web and deployed to GitHub Pages through GitHub Actions.**

For the web, export the build files with `npm run buildweb`, where you can later find them in the newly created `web-build` folder. Use them to deploy to whatever hosting service you want (e.g. GitHub Pages).

Instructions on how to deploy to either a phone or expo.dev (using EAS) will be documented later.

## 📁 Project structure
`assets/`\
Folder containing the icon, splash and more.

`src/`\
Project source files.\
By default, Expo stores all its source files in the project's root folder. However, we decided to store them in the `src` folder, for a cleaner solution.

`src/babel.config.js`\
Configurations for Babel - the compiler for development and build -, that reference Expo presets. It may include configurations for other Babel plugins, later, if needed.

`src/App.tsx`\
Entry point for the app.

`package.json` & `package-lock.json`\
Configuration files containing dependencies and scripts.

`app.json`\
App metadata.

`tsconfig.json`\
Configurations for TypeScript's official compiler, used for type checking. Extends `node_modules/expo/tsconfig.base`.