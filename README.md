# <img src="https://user-images.githubusercontent.com/57329376/231313179-8d375176-1077-4c1b-9bd6-cf323e9d9475.png" width="28"> TravelMate app
[![.github/workflows/deploy.yml](https://github.com/RGarrido03/TravelMate/actions/workflows/deploy.yml/badge.svg)](https://github.com/RGarrido03/TravelMate/actions/workflows/deploy.yml)

Project for "Interação Humano-Computador", 2022-2023.\
Check the web app at https://rgarrido03.github.io/TravelMate.


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

To test the app on a mobile phone, first install the Expo Go app on your [Android](https://play.google.com/store/apps/details?id=host.exp.exponent) or [iOS](https://apps.apple.com/app/apple-store/id982107779) device.

By default, `npm run start` opens an interactive Expo server, where you can open the project in Expo Go (Android & iOS) or in a web browser. However, more options are available, and can be synthesized like this:

| Command            | Description                                                       |
|--------------------|-------------------------------------------------------------------|
| `npm run start`    | Start the Expo server, to run the app on Expo Go or a web browser |
| `npm run android`  | Run the app on an Android phone or Android Studio emulator        |
| `npm run ios`      | Run the app on an iPhone or Xcode emulator                        |
| `npm run web`      | Run the app on a web browser (usually at http://localhost:19006)  |
| `npm run buildweb` | Build the app for web                                             |

All logs will be displayed in the terminal window where you're running the server.

## 🚀 Deployment
**TL;DR: The app is automatically built for the web and deployed to GitHub Pages through GitHub Actions.**

For the web, export the build files with `npm run buildweb`, where you can later find them in the newly created `web-build` folder. Use them to deploy to whatever hosting service you want (e.g. GitHub Pages).

Instructions on how to deploy to either a phone or expo.dev (using EAS) will be documented later.

## 📁 Project structure
`assets/`\
Folder containing the icon, splash and more. The `ìmages/` folder contains the initial images used in the app.

`app/`\
Project source files. Check the [Expo Router](https://expo.github.io/router/docs/) documentation for more information on how the navigation works.

`data/`\
Since our app doesn't feature a backend, the content needs to be iterated over arrays. This folder contains the initial data, as well as some helper functions for the arrays.

`app.json`\
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