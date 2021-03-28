import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import { View, StyleSheet } from "react-native";
import EmergencyChoiceScreen from "../screens/EmergencyChoice";
import HomeScreen from "../screens/HomeScreen";
import FireEmergencyScreen from "../screens/OtherEmergencyScreen";
import defaultStyles from "../config/defaultStyles";
import EmergencyDetailScreen from "../screens/EmergencyDetailScreen";
import EmergencyOptionsScreen from "../screens/EmergencyOptionsScreen";
import EmergencyContactsScreen from "../screens/EmergencyContactsScreen";

const Stack = createStackNavigator();

const EmergencyDetailNavigator = ({ route }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: defaultStyles.colors.black,
        },
        headerTitleStyle: {
          color: defaultStyles.colors.white,
        },
        headerTintColor: defaultStyles.colors.white,
        headerShown: false,
      }}
      mode="modal"
    >
      <Stack.Screen
        name="EmergencyDetail"
        component={EmergencyDetailScreen}
        initialParams={route.params}
      />
      <Stack.Screen name="RequestHelp" component={EmergencyOptionsScreen} />
      <Stack.Screen
        name="EmergencyContacts"
        component={EmergencyContactsScreen}
      />
    </Stack.Navigator>
  );
};

export default EmergencyDetailNavigator;
