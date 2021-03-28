import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import { View, StyleSheet } from "react-native";
import EmergencyChoiceScreen from "../screens/EmergencyChoice";
import HomeScreen from "../screens/HomeScreen";
import EmergencyDetailNavigator from "../navigation/EmergencyDetailNavigator"
import FireEmergencyScreen from "../screens/OtherEmergencyScreen"
import defaultStyles from "../config/defaultStyles";
import ResourcesPage from "../screens/ResourcesPage";

const Stack = createStackNavigator();

const AppNavigator = () => (
    
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: defaultStyles.colors.black,
      },
      headerTitleStyle: {
        color: defaultStyles.colors.white,
      },
      headerTintColor: defaultStyles.colors.white,
      headerShown: false
    }}
  >
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="EmergencyChoice" component={EmergencyChoiceScreen}/>
    <Stack.Screen name="EmergencyDetailNavigator" component={EmergencyDetailNavigator}/>
    <Stack.Screen name = "Resources" component= {ResourcesPage}/>
  </Stack.Navigator>
);

export default AppNavigator;
