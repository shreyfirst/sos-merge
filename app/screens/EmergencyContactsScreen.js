import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import * as Contacts from "expo-contacts";
import defaultStyles from "../config/defaultStyles";
import ListItemSeparator from "../components/ListItemSepratator";
import AppText from "../components/AppText";
export default function EmergencyContactsScreen() {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState([]);
  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Emails],
        });

        if (data.length > 0) {
          setData(data);
          const contact = data[0];
          console.log(contact);
        }
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        style={{ borderRadius: 20 }}
        data={data}
        keyExtractor={(option) => {
          return option.firstName;
        }}
        renderItem={({ item }) => {
          let itemStyle = selected.includes(item)
            ? { color: defaultStyles.colors.orange }
            : {};
          return (
            <TouchableOpacity
              onPress={() => setSelected([...selected, item])}
              style={[
                {
                  height: 40,
                  marginVertical: 30,
                  marginHorizontal: 20,
                },
              ]}
            >
              <AppText
                style={[
                  {
                    fontWeight: "600",
                    fontSize: 30,
                  },
                  itemStyle,
                ]}
              >
                {item.name}
              </AppText>
            </TouchableOpacity>
          );
        }}
        ItemSeparatorComponent={() => (
          <ListItemSeparator variant={defaultStyles.colors.lightMedium} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.black,
    flex: 1,
    paddingTop: 200,
    justifyContent: "center",
  },
});
