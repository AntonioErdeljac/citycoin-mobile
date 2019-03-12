# CityCoin Mobile

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites (Mac OS)

- Install [Watchman](https://facebook.github.io/watchman/)
- Install [React Native CLI](https://facebook.github.io/react-native/)
- Install [Node.js 8](https://nodejs.org/en/)
- Install [Xcode](https://developer.apple.com/xcode/)
- Update npm

```
sudo npm i -g npm
```

### Installing


- Install node packages

```
cd citycoin-mobile
npm i
react-native link
```

### Running the app

- Run the project with react-native script for android develop environment (Android studio emulator needs to be running)

```
react-native run-android
```

- Run the project with react-native script for ios develop environment (Xcode needs to be running)

```
react-native run-ios
```

## Code quality

- Ensure code quality by enabling eslint and running linting npm script once in a while

```
npm run lint
```

- Followed [SOLID principles](https://en.wikipedia.org/wiki/SOLID_(object-oriented_design))

- Don't get emotional about code you wrote

## Deployment

- Deploy on android with specified variation

```
cd android && ./gradlew assemble[VariantName]
```

- Deploy on ios from Xcode