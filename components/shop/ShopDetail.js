import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import {
  Spinner,
  HStack,
  Heading,
  Center,
  NativeBaseProvider,
} from "native-base";
import ProductList from "../products/ProductItem";
import ProductItem from "../products/ProductItem";
import CartButton from "../buttons/CartButton";

const ShopDetail = ({ route, navigation }) => {
  const { shop } = route.params;
  const loadingShops = useSelector((state) => state.shopReducer.loading);
  const shops = useSelector((state) => state.shopReducer.shops);

  if (loadingShops)
    return (
      <NativeBaseProvider>
        <HStack space={2}>
          <Heading color="primary.800">Loading</Heading>
          <Spinner accessibilityLabel="Loading posts" />
        </HStack>
        <Center flex={1}></Center>
      </NativeBaseProvider>
    );

  return (
    <View>
      <Text>{shop.name}</Text>
      <Image source={{ uri: shop.image }} style={{ width: 200, height: 200 }} />
      <Text>Products :</Text>

      {/* <ProductList products={shop.products} /> */}
      {shop.products.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
      <CartButton />
    </View>
  );
};

export default ShopDetail;

const styles = StyleSheet.create({
  image: { height: 66, width: 100 },
});
