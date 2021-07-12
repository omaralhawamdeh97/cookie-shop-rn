import React from "react";
import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { SHOP_LIST } from "../navigations/types";

export default function Home({ navigation }) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate(SHOP_LIST)}
    >
      <Text>Cookies and Beyondd</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    height: 75,
  },
});
