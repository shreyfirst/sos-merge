import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import { Provider } from "react-redux";
import { createStore } from "redux";
import allReducers from "./reducers/index"

const store = createStore(allReducers);


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer theme={navigationTheme}>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({});
