import React, { useState } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import AppButton from "../components/AppButton";
import ClickerView from "../components/ClickerView";
import Screen from "../components/Screen";
import defaultStyles from "../config/defaultStyles";

const EmergencyChoiceScreen = ({ navigation }) => {
  const [selections, changeSelections] = useState([]);
  const ambulanceBackG = selections.includes("ambulance") ? true : false;
  const policeBackG = selections.includes("police") ? true : false;
  const firefighterBackG = selections.includes("firefighter") ? true : false;

  const select = (selection) => {
    if (!selections.includes(selection)) {
      changeSelections([...selections, selection]);
    } else {
      changeSelections((prev) => prev.filter((s) => s != selection));
    }
  };

  return (
    <Screen style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>What do you need?</Text>
        <Text style={styles.subTitle}>Select all that apply</Text>
      </View>
      <View style={styles.bodyContainer}>
        <ClickerView
          onPress={() => select("ambulance")}
          enabled={ambulanceBackG}
          title="Ambulance"
        />
        <ClickerView
          onPress={() => select("police")}
          enabled={policeBackG}
          title="Police"
        />
        <ClickerView
          onPress={() => select("firefighter")}
          enabled={firefighterBackG}
          title="Firefighter"
        />

        <AppButton
          onPress={() =>
            navigation.navigate("EmergencyDetailNavigator", {
              emergencyChoices: selections,
            })
          }
          title="Next"
        />
        <View style={[styles.conditional, { marginTop: 30 }]}>
          <TouchableOpacity onPress={() => navigation.navigate("Resources")}>
            <Text style={styles.text}>Resources</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: defaultStyles.colors.black,
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bodyContainer: {
    flex: 2,
  },
  conditional: {
    flex: 1 / 4,
    borderWidth: 1,
    borderRadius: 20,

    backgroundColor: "#f2f2f2",
    alignItems: "center",
    justifyContent: "center",
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
  text: {
    color: defaultStyles.colors.black,
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default EmergencyChoiceScreen;
