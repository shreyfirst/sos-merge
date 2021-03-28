import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "./AppText";
import defaultStyles from "../config/defaultStyles";

function AppButton({
  onPress,
  title,
  icon,
  disabled,
  buttonStyle,
  backgroundColor,
  outlined,
  textStyle,
  textColor = defaultStyles.colors.black,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={
        !disabled
          ? [styles.button, buttonStyle]
          : [styles.button, buttonStyle, { opacity: 0.5 }]
      }
      disabled={disabled}
      delayPressIn={0}
    >
      <AppText style={[styles.buttonText, { color: textColor }, textStyle]}>
        {title}
      </AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    backgroundColor: defaultStyles.colors.orange,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    padding: 15,
    height: 70,

    // shadowOffset: {
    //   width: 0,
    //   height: 3,
    // },
    // shadowOpacity: 0.27,
    // shadowRadius: 4.65,

    // elevation: 6,
    flexDirection: "row",
    marginVertical: 10,
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 22,
  },
  icon: {
    marginRight: 10,
  },
});

export default AppButton;
