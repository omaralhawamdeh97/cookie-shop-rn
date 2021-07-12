import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { CART } from "../navigations/types";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
const CartButton = () => {
  const navigation = useNavigation();
  //   const items = useSelector((state) => state.cartReducer.items);
  //   const totalQuantity = items.forEach((item) => {
  //     let total = item.quantity;
  //     console.log(total);
  //   });
  return (
    <View>
      <Feather
        name="shopping-cart"
        size={24}
        color="black"
        onPress={() => navigation.navigate(CART)}
      />
      {/* <Text>Total{totalQuantity}</Text> */}
    </View>
  );
};

export default CartButton;

const styles = StyleSheet.create({});
