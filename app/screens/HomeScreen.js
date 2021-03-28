import React, {useEffect, useRef, useState} from "react";
import { View, StyleSheet, Button, Platform } from "react-native";
import AppText from "../components/AppText";
import Screen from "../components/Screen";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";
import defaultStyles from "../config/defaultStyles";
import * as Location from 'expo-location';
import InsetShadow from "react-native-inset-shadow";
import OptionCard from "../components/OptionCard";
import userApi from "../api/api"
import { TouchableOpacity } from "react-native-gesture-handler";
import registerForPushNotificationsAsync from "../notificationFunction"

function HomeScreen({navigation}) {
  useEffect(() => {
    registerForPushNotificationsAsync().then(async (token) => {
      await userApi
        .postUserNotificationToken({ id: token })
    });
  }, []);
  const [errorMsg, setErrorMsg] = useState(null);
    useEffect(() => {
        (async () => {
            if (Platform.OS === 'android' && !Constants.isDevice) {
                setErrorMsg(
                    "Device not compatible"
                );
                return;
            }
            let { status } = await Location.requestPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getLastKnownPositionAsync({});
            await userApi.postCurrentLocation({lat: location.coords.latitude, long: location.coords.longitude})
        })();
    }, []);
  return (
    <Screen style={styles.container}>
      <AppText style={styles.title}>Welcome</AppText>
      <AppText style={styles.subTitle}>Having an emergency?</AppText>
      <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("EmergencyChoice")}>
        <AppText style={styles.sostext}>SOS</AppText>
      </TouchableOpacity>
      <OptionCard
        title="Alert in Vicinity"
        subTitle="Disabled"
        color={defaultStyles.colors.orange}
        icon="home-city"
      />
      <OptionCard
        title="Geolocation"
        subTitle="Enabled"
        color={defaultStyles.colors.teal}
        icon="earth"
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.black,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 55,
    fontWeight: "700",
  },
  subTitle: {
    fontSize: 30,
    fontWeight: "300",
    color: defaultStyles.colors.lightMedium,
  },
  button: {
    width: 250,
    height: 250,
    borderRadius: 999,
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: defaultStyles.colors.primary,
    shadowColor: "#FF0000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.61,
    shadowRadius: 20.11,

    elevation: 14,
    marginBottom: 30,
  },
  sostext: {
    fontSize: 50,
    fontWeight: "800",
  },
});

export default HomeScreen;
