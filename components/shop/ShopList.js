import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import {
  Spinner,
  HStack,
  Heading,
  Center,
  NativeBaseProvider,
} from "native-base";
import ShopItem from "./ShopItem";

const ShopList = ({ navigation }) => {
  const shopsLoading = useSelector((state) => state.shopReducer.loading);
  const shops = useSelector((state) => state.shopReducer.shops);

  const mappedShops = shops.map((shop) => (
    <ShopItem key={shop.id} shop={shop} navigation={navigation} />
  ));
  return (
    <View>
      {shopsLoading ? (
        <NativeBaseProvider>
          <HStack space={2}>
            <Heading color="primary.800">Loading</Heading>
            <Spinner accessibilityLabel="Loading posts" />
          </HStack>
          <Center flex={1}></Center>
        </NativeBaseProvider>
      ) : (
        <>
          <Text>{mappedShops}</Text>
        </>
      )}
    </View>
  );
};

export default ShopList;

const styles = StyleSheet.create({});
