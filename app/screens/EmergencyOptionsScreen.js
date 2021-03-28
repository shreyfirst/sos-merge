import React, { useState, useEffect } from "react";
import Screen from "../components/Screen";
import * as Location from "expo-location";
import * as SMS from "expo-sms";
import { View, Text, Button, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import GiantButton from "../components/GiantButton";
import defaultStyles from "../config/defaultStyles";

const EmergencyOptionsScreen = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  useEffect(() => {
    (async () => {
      if (Platform.OS === "android" && !Constants.isDevice) {
        setErrorMsg("Device not compatible");
        return;
      }
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getLastKnownPositionAsync({});
      setLocation(location);
    })();
  }, []);
  const medicalEmergencyData = useSelector((state) => state.medicalReducer);
  const policeEmergencyData = useSelector((state) => state.policeReducer);
  const fireEmergencyData = useSelector((state) => state.fireReducer);
  const textTo911 = async () => {
    const isAvailable = await SMS.isAvailableAsync();
    let text = "Waiting..";
    if (errorMsg) {
      text = errorMsg;
    } else if (location) {
      const locationText = JSON.stringify(location);
      let message = "";
      if (medicalEmergencyData.length !== 0) {
        message += "I am in a state of medical emergency. I am experiencing";
        for (let i = 0; i < medicalEmergencyData.length; i++) {
          message += ", " + medicalEmergencyData[i];
        }
        message += ".";
      }
      if (policeEmergencyData.length !== 0) {
        message += "\nI also need the police for ";
        for (let i = 0; i < policeEmergencyData.length; i++) {
          message += ", " + policeEmergencyData[i];
        }
        message += ".";
      }
      if (fireEmergencyData.length !== 0) {
        message += "\n I also need the fire fighter. I am experiencing ";
        for (let i = 0; i < fireEmergencyData.length; i++) {
          message += fireEmergencyData[i] + ", ";
        }
        message += ".";
      }

      message += `\n\nMy location is: ${locationText}`;
      if (isAvailable) {
        SMS.sendSMSAsync(
          "911",
          "Hi, I am currently in an emergency. Please send Fire and Police to: 816 Polaris Drive, Tustin, CA 92782-1720 (33.701385498046875^, -117.80711883690003^). Data: Bleeding, Domestic Abuse"
        );
      } else {
      }
    }
  };
  const alertVicinity = () => {};
  return (
    <Screen style={styles.container}>
      <GiantButton
        title="Text To 911"
        onPress={textTo911}
        backgroundColor={defaultStyles.colors.primary}
      />
      <GiantButton
        title="ALERT Vicinity"
        onPress={alertVicinity}
        backgroundColor={defaultStyles.colors.teal}
      />
      <GiantButton
        title="Alert emergency contacts"
        onPress={() => navigation.navigate("EmergencyContacts")}
        backgroundColor={"#c259ff"}
      />
      <GiantButton
        title="Go Back"
        onPress={() => navigation.goBack()}
        backgroundColor={defaultStyles.colors.medium}
      />

      {/* <Button title = "Make Yourself Heard" onPress = {makeHeard}/> */}
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: defaultStyles.colors.black,
  },
});

export default EmergencyOptionsScreen;
