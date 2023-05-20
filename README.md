# <img src="https://user-images.githubusercontent.com/57329376/231313179-8d375176-1077-4c1b-9bd6-cf323e9d9475.png" width="28"> TravelMate app
[![.github/workflows/deploy.yml](https://github.com/RGarrido03/TravelMate/actions/workflows/deploy.yml/badge.svg)](https://github.com/RGarrido03/TravelMate/actions/workflows/deploy.yml)

Project for "Interação Humano-Computador", 2022-2023.

## ✍ Design
This app tightly follows the app prototype we made in Figma, which you can check [here](https://www.figma.com/proto/G9qqNCCqaahFK07umeDm0B/Low-level-prototype?node-id=64-2&starting-point-node-id=64%3A2).

It is inspired in both [Material Design 3](https://m3.material.io/) and [Fluent Design](https://www.microsoft.com/design/fluent/), and features design trends such as glassmorphism, in a fresh and modern UI.

The color palette is used as follows:

| Color   | Name            | Usage                                        |
|---------|-----------------|----------------------------------------------|
| #E8F3F4 | Lighter green   | Menu headers and action bars                 |
| #BDF4F1 | Light green     | N/D                                          |
| #70ECE4 | Accent green    | Things that need to be noticed               |
| #70D9D3 | Accent green #2 | N/D                                          |
| #60BBB6 | Dark green      | Strokes, icons, buttons & more               |
| #EB8C6F | Orange          | Negative actions, such as deleting something |
| #3B4949 | Dark gray       | Some not-so-important text                   |
| #000000 | Black           | Important text, headers' text                |
| #FFFFFF | White           | Misc                                         |

This app features dark mode, with automatic theme switching. However, dark mode's design is quite questionable, so it needs to be improved.

## 💻 Development
This is a React Native app created with Expo. Instead of using JavaScript (Expo's default programming language), this project uses [TypeScript](https://www.typescriptlang.org/) for type checking and more.

Before making any code changes after cloning the repo, be sure to have installed the Current version of Node.js. **Run `npm install` after cloning the repository, in order to install the project dependencies**.

Depending on the operating system, the initial steps to run the app are different:
- iOS: Install the [Expo Go app](https://apps.apple.com/app/apple-store/id982107779).
- Android: Install the [development build](https://expo.dev/accounts/rgarrido03/projects/travelmate/builds) of this app. More details on the [Why a development build on Android?](#-why-a-development-build-on-android) section.

By default, `npm run start` opens an interactive Expo server, where you can open the project in Expo Go (Android & iOS). However, more options are available, and can be synthesized like this:

| Command                 | Description                                                                        |
|-------------------------|------------------------------------------------------------------------------------|
| `npm run start`         | Start the Expo server, to run the app on Expo Go                                   |
| `npm run startclear`    | Start the Expo server, to run the app on Expo Go, with cleared cache               |
| `npm run startdev`      | Start the Expo server, to run the app on the development build                     |
| `npm run startdevclear` | Start the Expo server, to run the app on the development build, with cleared cache |
| `npm run android`       | Run the app on an Android phone or Android Studio emulator                         |
| `npm run ios`           | Run the app on an iPhone or Xcode emulator                                         |

All logs will be displayed in the terminal window where you're running the server.

## ⛓️ Why a development build on Android?
At the time of writing this, the current version of the Expo SDK is 48.0.x, which features `expo-blur` 12.2.2. This version doesn't support blur on Android (instead, it renders a semi-transparent view).

However, `expo-blur` v12.3.0+ supports blur on Android, but doesn't render on the Expo Go app, causing a crash. Therefore, we need to use a development build of the app, which bypasses the version checks, and bundles the packages we actually want.

This development build features the app's name and icon.

## 🚀 Deployment
We are using EAS (Expo Application Services) to build and deploy the app.

The build is triggered automatically when a new commit is pushed to the `main` branch, and the new app build is deployed to the EAS servers.

Both Expo Go and the development build can fetch updates from the EAS. However, the development build needs to be updated manually every time there is an under-the-hood change (like installing a new package).

## 📁 Project structure
`assets/`\
Folder containing the icon, splash and more. The `ìmages/` folder contains the initial images used in the app.

`app/`\
Project source files. Check the [Expo Router](https://expo.github.io/router/docs/) documentation for more information on how the navigation works.

`components/`\
Reusable components, such as buttons, cards, etc.

`data/`\
Since our app doesn't feature a backend, the content needs to be iterated over arrays. This folder contains the initial data, as well as some helper functions for the arrays.

`app.config.js`\
App metadata.

`babel.config.js`\
Configurations for Babel - the compiler for development and build -, that reference Expo presets. It may include configurations for other Babel plugins, later, if needed.

`global.d.ts`\
TypeScript image module declaration file.

`package.json` & `package-lock.json`\
Configuration files containing dependencies and scripts.

`tsconfig.json`\
Configurations for TypeScript's official compiler, used for type checking. Extends `node_modules/expo/tsconfig.base`.

## 📗 Useful documentation 
- [Expo](https://docs.expo.dev/)
- [Expo Router](https://expo.github.io/router/docs/)
- [React Native](https://reactnative.dev/docs/getting-started)