import { styled } from "@material-ui/core";
import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import defaultStyles from "../config/defaultStyles";

function ClickerView({ enabled, onPress, title, additionalStyle }) {
  let divStyle = enabled ? styles.selected : styles.unselected;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.conditional, divStyle, additionalStyle]}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  conditional: {
    flex: 1 / 4,
    backgroundColor: defaultStyles.colors.muted,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    borderColor: defaultStyles.colors.white,

    marginVertical: 10,
  },
  text: {
    color: defaultStyles.colors.white,
    fontSize: 25,
    fontWeight: "bold",
  },
  selected: {
    backgroundColor: defaultStyles.colors.primary,
    shadowColor: defaultStyles.colors.danger,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.92,
    shadowRadius: 5.46,

    elevation: 9,
  },
});

export default ClickerView;
