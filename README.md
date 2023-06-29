# <img src="https://user-images.githubusercontent.com/57329376/231313179-8d375176-1077-4c1b-9bd6-cf323e9d9475.png" width="28"> TravelMate app
[![.github/workflows/deploy.yml](https://github.com/RGarrido03/TravelMate/actions/workflows/deploy.yml/badge.svg)](https://github.com/RGarrido03/TravelMate/actions/workflows/deploy.yml)

Project for "Interação Humano-Computador", 2022-2023 by Rúben Garrido, Diogo Falcão and Diana Miranda.

It supports several platforms, including:
- Android
- iOS
- iPadOS
- macOS (exclusive to Macs with Apple silicon)
- visionOS (yes, even Apple Vision Pro runs this!)

[Presentation slides (Canva)](https://www.canva.com/design/DAFeS6YpUG0/Mkgjgk4K1JCFlZt_AtBC3A/edit?utm_content=DAFeS6YpUG0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)

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

This app features dark mode, with automatic theme switching. However, dark mode's design is quite questionable, so it needs to be improved (~~spoiler: it will never be improved~~).

You may see some differences between iOS and Android (with iOS being the pretty boy). Even though we're using the same components on both OSes, some components are rendered differently on each OS, such as blur views. It's not our fault, blame React Native.

## 💻 Development
This is a React Native app created with [Expo](https://docs.expo.dev) - a framework on top of React that renders native components. Instead of using JavaScript (Expo's default programming language), this project uses [TypeScript](https://www.typescriptlang.org/) for type checking and more.

Before making any code changes after cloning the repo, be sure to have installed the Current version of Node.js. **Run `npm install` after cloning the repository, in order to install the project dependencies**.

For iOS/iPadOS and Android, install the Expo Go app. Since this project is using a beta version of Expo, the beta version of Expo Go is required. Check Expo's documentation on how to install it.

However, for macOS and visionOS, a development build is required. Development builds also feature the app icon and name, so they can be a great option for a "more realistic" option. They can be built using Xcode (for Apple devices) or Android Studio, although EAS features server-side building.

By default, `npm run start` opens an interactive Expo server, where you can open the project in Expo Go. However, more options are available, and can be synthesized like this:

| Command                 | Description                                                                        |
|-------------------------|------------------------------------------------------------------------------------|
| `npm run start`         | Start the Expo server, to run the app on Expo Go                                   |
| `npm run startclear`    | Start the Expo server, to run the app on Expo Go, with cleared cache               |
| `npm run startdev`      | Start the Expo server, to run the app on the development build                     |
| `npm run startdevclear` | Start the Expo server, to run the app on the development build, with cleared cache |
| `npm run android`       | Run the app on an Android phone or Android Studio emulator                         |
| `npm run ios`           | Run the app on an iPhone emulator                                         |

So, basically, you should run `npm run start` if you're working on Android or iOS/iPadOS using the Expo Go app, and `npm run startdev` on all other cases.

All logs will be displayed in the terminal window where you're running the server.

No web support - we're sorry or you're welcome.

## 🚀 Deployment
We are using EAS (Expo Application Services) to build and deploy the app.

The build is triggered automatically when a new commit is pushed to the `main` branch, and the new app build is deployed to the EAS servers.

Both Expo Go and the development build can fetch updates from the EAS. However, the development build needs to be updated manually every time there is an under-the-hood change (like installing a new package).

Android users can install the production build from [here](https://github.com/RGarrido03/TravelMate/releases), but will face giant markers in the map. Apple builds require manual building using Xcode due to provisioning profiles and such.

## 📁 Project structure
`android/`\
Android Studio project for building on Android.

`assets/`\
Folder containing the icon, splash and more. The `images/` folder contains the initial images used in the app.

`app/`\
Project source files. Check the [Expo Router](https://expo.github.io/router/docs/) documentation for more information on how navigation works.

`components/`\
Reusable components, such as buttons, cards, etc.

`data/`\
Since our app doesn't feature a backend, the content needs to be iterated over arrays. This folder contains the initial data, as well as some helper functions for the arrays.

`ios/`\
Xcode project for building on Apple's operating systems (iOS, iPadOS, macOS, and visionOS).

`app.config.js`\
App metadata.

`babel.config.js`\
Configurations for Babel - the compiler for development and build -, that reference Expo presets. It may include configurations for other Babel plugins, later, if needed.

`global.d.ts`\
TypeScript image module declaration file.

`index.js`\
Entry point for the app. Since Expo Router is used, this file only imports it, so that pages in `app/` get rendered.

`package.json` & `package-lock.json`\
Configuration files containing dependencies and scripts.

`tsconfig.json`\
Configurations for TypeScript's official compiler, used for type checking. Extends `node_modules/expo/tsconfig.base`.

## 📗 Useful documentation 
- [Expo](https://docs.expo.dev/)
- [Expo 49 beta release notes](https://blog.expo.dev/expo-sdk-49-beta-is-now-available-6373e78f8624)
- [Expo Router](https://expo.github.io/router/docs/)
- [React Native](https://reactnative.dev/docs/getting-started)
- [React Native Bottom Sheet](https://gorhom.github.io/react-native-bottom-sheet/)
