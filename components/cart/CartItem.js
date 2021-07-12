import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CartItem = (props) => {
  //   console.log(props.item, "zzz");
  //   console.log(item.name, "name");
  return (
    <View>
      <Text>Name : {props.item.name}</Text>
      <Text>Price : {props.item.price}</Text>
      <Text>Quantity : {props.item.quantity}</Text>
      <Text>Total price : {props.item.price * props.item.quantity}</Text>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({});
