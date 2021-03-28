import React from "react";
import { View, StyleSheet } from "react-native";
import defaultStyles from "../config/defaultStyles";
import AppText from "./AppText";
import Icon from "./Icon";

function OptionCard({ title, subTitle, icon, color }) {
  return (
    <View style={styles.mainHolder}>
      <View style={[styles.side, { backgroundColor: color }]}></View>
      <View style={styles.container}>
        <View>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
        <View style={styles.iconHolder}>
          <Icon name={icon} backgroundColor={color} size={55} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainHolder: {
    flexDirection: "row",
    marginVertical: 12,
  },
  container: {
    backgroundColor: defaultStyles.colors.muted,
    width: 370,
    height: 135,
    alignItems: "center",
    paddingLeft: 30,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    flexDirection: "row",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subTitle: {
    fontSize: 20,
    color: defaultStyles.colors.medium,
  },

  iconHolder: {
    flex: 1,
    alignItems: "flex-end",
    marginRight: 20,
    marginBottom: 15,
  },
  side: {
    height: 135,
    width: 12,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
});

export default OptionCard;
