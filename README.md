# React Weather App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and uses [Typescript](https://github.com/Microsoft/TypeScript) and [Redux Saga](https://github.com/redux-saga/redux-saga).

The project structure is based on this [starter project](https://github.com/Microsoft/TypeScript-React-Starter) from Microsoft.

It uses [Open Weather api](https://openweathermap.org/api) so, it needs a valid api key to be provided in a `.env` file at the root folder with the following format:

```
REACT_APP_API_KEY=your_api_key_here
```

Ideally, as an improvement, that api key should not be visible by using a proxy.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm test:verbose`

In case you want to see more info about your tests.<br>

### `npm test:coverage`

Creates a coverage report from your tests in `coverage` folder.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.
