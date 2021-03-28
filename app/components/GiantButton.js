import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import defaultStyles from "../config/defaultStyles";
import AppText from "./AppText";

function GiantButton({ title, onPress, backgroundColor }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, { backgroundColor: backgroundColor }]}
    >
      <AppText style={styles.title}>{title}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 400,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "800",
  },
});

export default GiantButton;
