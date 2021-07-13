import { Box, Center, List } from "native-base";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { checkOutCart } from "../../store/actions/cartActions";
import CartItem from "./CartItem";

//In CartList.js, map through the items of your cartReducer and find the products from allProducts that have the same ID as the IDs in the items state.

const CartList = () => {
  const products = useSelector((state) => state.productReducer.products);
  const items = useSelector((state) => state.cartReducer.items);
  const mappedItems = items.map((item) => {
    const myItem = products.find((product) => product.id === item.id);
    return { ...myItem, ...item };
  });
  const dispatch = useDispatch();
  return (
    <Center flex={1}>
      <Box w="95%">
        <List space={2} my={2}>
          {mappedItems.map((item) => (
            <CartItem item={item} key={item.id} />
          ))}
          <Button title="Check Out" onPress={() => dispatch(checkOutCart())} />
        </List>
      </Box>
    </Center>
  );
};

export default CartList;

const styles = StyleSheet.create({});
