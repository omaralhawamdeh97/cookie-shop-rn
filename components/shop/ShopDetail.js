import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { Center, Box, List } from "native-base";
import ProductItem from "../products/ProductItem";
import CartButton from "../buttons/CartButton";
import Spinner from "../Spinner";

const ShopDetail = ({ route, navigation }) => {
  const { shop } = route.params;
  const loadingShops = useSelector((state) => state.shopReducer.loading);
  const shops = useSelector((state) => state.shopReducer.shops);

  if (loadingShops) return <Spinner />;

  return (
    <Center flex={1}>
      <Box w="95%">
        <Text>{shop.name}</Text>
        <Image
          source={{ uri: shop.image }}
          style={{ width: 200, height: 200 }}
        />
        <Text>Products :</Text>
        <CartButton />
        <List space={2} my={2}>
          {shop.products.map((product) => (
            <ProductItem product={product} key={product.id} />
          ))}
        </List>
      </Box>
    </Center>
  );
};

export default ShopDetail;

const styles = StyleSheet.create({
  image: { height: 66, width: 100 },
});
