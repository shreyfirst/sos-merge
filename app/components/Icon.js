import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, TouchableOpacity } from "react-native";

function Icon({
  name,
  size = 40,
  backgroundColor = "#000",
  iconColor = "#fff",
  onPress,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons name={name} size={size * 0.5} color={iconColor} />
    </TouchableOpacity>
  );
}

export default Icon;
