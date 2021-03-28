import React from "react";
import { View, StyleSheet } from "react-native";
import defaultStyles from "../config/defaultStyles";

function ListItemSeparator(props) {
  return (
    <View style={[{ backgroundColor: props.variant }, styles.separator]} />
  );
}

const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 1,
    opacity: 0.2,
    backgroundColor: defaultStyles.colors.white,
  },
});

export default ListItemSeparator;
