import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { CART } from "../navigations/types";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
const CartButton = () => {
  const navigation = useNavigation();
  let total = 0;
  const items = useSelector((state) => state.cartReducer.items);
  const totalQuantity = items.forEach((item) => {
    total = total + item.quantity;
    return total;
  });

  return (
    <View style={styles.all}>
      <Feather
        name="shopping-cart"
        size={24}
        color="black"
        onPress={() => navigation.navigate(CART)}
      />
      <Text style={styles.number}>{total}</Text>
    </View>
  );
};

export default CartButton;

const styles = StyleSheet.create({
  number: {
    fontSize: 10,
    color: "black",
    backgroundColor: "white",

    textAlign: "center",
  },
  all: {
    marginRight: 10,
  },
});
