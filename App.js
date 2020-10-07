/** @format */

import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import MealNavigator from "./navigation/MealNavigation";
import { createStore, combineReducers } from "redux";
import { mealsReducer } from "./redux/reducers/mealsReducer";
import { Provider } from "react-redux";

const rootReducer = combineReducers({
  meals: mealsReducer
});

const store = createStore(rootReducer);

const fetchFont = () => {
  return Font.loadAsync({
    "default-font": require("./assets/fonts/OpenSans-Regular.ttf"),
    "default-font-bold": require("./assets/fonts/OpenSans-Bold.ttf")
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading startAsync={fetchFont} onFinish={() => setFontLoaded(true)} />
    );
  }

  return (
    <Provider store={store}>
      <MealNavigator />
    </Provider>
  );
}
