import React, { useState, useEffect } from "react";
import Screen from "../components/Screen";
import { View, Button, Text, StyleSheet, Platform } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import defaultStyles from "../config/defaultStyles";

import Swiper from "react-native-swiper";

import {
  addMedicalData,
  addPoliceData,
  removeMedicalData,
  addFireData,
  removePoliceData,
  removeFireData,
} from "../../actions/index";
import { TouchableOpacity } from "react-native-gesture-handler";
import ClickerView from "../components/ClickerView";
import AppButton from "../components/AppButton";

const medicalSigns = [
  "Breathing Difficulties",
  "Bleeding",
  "Sudden Collapse",
  "Sudden Pain",
  "Nausea / Loss of Consciousness",
  "Not Listed",
];
const policeSigns = [
  "Theft",
  "Murder",
  "Assault",
  "Domestic Abuse",
  "Car Accident",
  "Not Listed",
];
const fireSigns = [
  "Ongoing Fire",
  "fire2",
  "fire3",
  "fire4",
  "yomomma",
  "Not Listed",
];

const EmergencyDetailScreen = ({ navigation, route }) => {
  const medicalEmergencyData = useSelector((state) => state.medicalReducer);
  const policeEmergencyData = useSelector((state) => state.policeReducer);
  const fireEmergencyData = useSelector((state) => state.fireReducer);
  const emergencyChoices = route.params.emergencyChoices;
  const dropDown = emergencyChoices.map((emergency) => {
    let buttons;
    if (emergency == "ambulance") {
      buttons = medicalSigns.map((type) => {
        return (
          <ClickerView
            additionalStyle={{ height: 45 }}
            enabled={medicalEmergencyData.includes(type)}
            onPress={() => {
              onSelection("ambulance", type);
            }}
            title={type}
          />
        );
      });
    } else if (emergency == "police") {
      buttons = policeSigns.map((type) => (
        <ClickerView
          additionalStyle={{ height: 45 }}
          enabled={policeEmergencyData.includes(type)}
          onPress={() => {
            onSelection("police", type);
          }}
          title={type}
        />
      ));
    } else if (emergency == "fire") {
      buttons = fireSigns.map((type) => (
        <ClickerView
          additionalStyle={{ height: 45 }}
          enabled={fireEmergencyData.includes(type)}
          onPress={() => {
            onSelection("fire", type);
          }}
          title={type}
        />
      ));
    }
    return (
      <View key={emergency} style={{ flex: 7 / 8 }}>
        {buttons}
      </View>
    );
  });

  const dispatch = useDispatch();
  const requestSupport = async () => {
    navigation.navigate("RequestHelp");
  };
  const onSelection = (type, typeOfEmergency) => {
    if (type == "ambulance") {
      if (!medicalEmergencyData.includes(typeOfEmergency)) {
        dispatch(addMedicalData(typeOfEmergency));
      } else {
        dispatch(removeMedicalData(typeOfEmergency));
      }
    } else if (type == "police") {
      if (!policeEmergencyData.includes(typeOfEmergency)) {
        dispatch(addPoliceData(typeOfEmergency));
      } else {
        dispatch(removePoliceData(typeOfEmergency));
      }
    } else if (type == "fire") {
      if (!fireEmergencyData.includes(typeOfEmergency)) {
        dispatch(addFireData(typeOfEmergency));
      } else {
        dispatch(removeFireData(typeOfEmergency));
      }
    }
  };
  return (
    <Screen style={{ backgroundColor: defaultStyles.colors.black }}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>What's going on?</Text>
      </View>
      <View style={styles.bodyContainer}>
        <Swiper>{dropDown}</Swiper>

        <AppButton
          title="Request Support NOW"
          onPress={requestSupport}
          color="white"
          buttonStyle={{ backgroundColor: defaultStyles.colors.orange }}
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 4,
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bodyContainer: {
    flex: 3,
  },
  conditional: {
    borderWidth: 1,
    borderColor: "purple",
    flex: 1 / 6,
    alignItems: "center",
    justifyContent: "center",
  },
  alertButton: {
    borderWidth: 1,
    borderColor: "green",
    flex: 1 / 2,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "700",
    color: defaultStyles.colors.white,
  },
  subTitle: {
    fontSize: 30,
    fontWeight: "300",
    color: defaultStyles.colors.lightMedium,
  },
  text: {},
});

export default EmergencyDetailScreen;
