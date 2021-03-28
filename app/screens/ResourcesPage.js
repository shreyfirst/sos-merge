import React from "react";
import Screen from "../components/Screen";
import { FlatList, View, Text, StyleSheet } from "react-native";
import defaultStyles from "../config/defaultStyles";
import AppText from "../components/AppText";

const resources = [
  { name: "LGBTQ+", contact: "(949) 724-6356", location: "Irvine, CA" },
  {
    name: "Mental Health Crisis",
    contact: "(866) 830-6011",
    location: "OC, CA",
  },
  {
    name: "Suicide Prevention",
    contact: "(800)-273-8255",
    location: "Los Angelos",
  },
  {
    name: "Domestic Violence",
    contact: "(714) 992-1931",
    location: "Nationwide",
  },
  {
    name: "Crime Survivors",
    contact: "(949)-872-7895",
    location: "Nationwide",
  },
];
const ResourcesPage = () => {
  return (
    <Screen style={styles.container}>
      <View style={styles.upperContainer}>
        <Text style={styles.title}>Resources</Text>
      </View>
      <View style={styles.lowerContainer}>
        <Text style={styles.subTitle}>
          Filtering By Your Location:{"  "}
          <AppText
            style={{ fontWeight: "bold", color: defaultStyles.colors.primary }}
          >
            Irvine, CA
          </AppText>
        </Text>
        <FlatList
          data={resources}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => {
            return (
              <View style={styles.card}>
                <Text style={styles.miniTitle}>{item.name}</Text>
                <Text style={{ color: "white" }}>{item.contact}</Text>
                <Text style={{ color: "white" }}>{item.location}</Text>
              </View>
            );
          }}
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 4,
    backgroundColor: defaultStyles.colors.black,
  },
  upperContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  lowerContainer: {
    flex: 3,
  },
  title: {
    fontSize: 55,
    fontWeight: "700",
    color: "white",
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "300",
    color: defaultStyles.colors.lightMedium,
    marginBottom: 15,
  },
  card: {
    flex: 1 / 5,
    borderWidth: 1,
    width: "100%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    borderRadius: 20,
    borderColor: "white",
  },
  miniTitle: {
    fontSize: 30,
    fontWeight: "700",
    color: defaultStyles.colors.orange,
  },
});

export default ResourcesPage;
