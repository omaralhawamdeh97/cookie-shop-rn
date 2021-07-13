import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { deleteItemFromCart } from "../../store/actions/cartActions";

const CartItem = (props) => {
  const dispatch = useDispatch();
  return (
    <View>
      <Text>Name : {props.item.name}</Text>
      <Text>Price : {props.item.price}</Text>
      <Text>Quantity : {props.item.quantity}</Text>
      <Text>Total price : {props.item.price * props.item.quantity}</Text>
      <Button
        title="Delete"
        onPress={() => dispatch(deleteItemFromCart(props.item.id))}
      />
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({});
