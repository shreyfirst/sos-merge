import React from "react";
import Constants from "expo-constants";
import { StyleSheet, View, SafeAreaView, Dimensions } from "react-native";
const window = Dimensions.get("window");

function Screen(props) {
  return (
    <View style={[styles.view, props.style]}>
      <SafeAreaView style={[styles.screen, props.style]}>
        {props.children}
      </SafeAreaView>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  view: {
    flex: 1,
    paddingHorizontal: window.width * 0.06,
  },
});

export default Screen;
