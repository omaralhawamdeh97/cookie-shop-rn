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
import ProductItem from "./ProductItem";

const ProductList = (products) => {
  const productsLoading = useSelector((state) => state.productReducer.loading);
  // const products = useSelector((state) => state.productReducer.products);

  // const mappedProducts = products.map((product) => (
  //   <ProductItem key={product.id} product={product} />
  // ));

  return (
    <View>
      {productsLoading ? (
        <NativeBaseProvider>
          <HStack space={2}>
            <Heading color="primary.800">Loading</Heading>
            <Spinner accessibilityLabel="Loading posts" />
          </HStack>
          <Center flex={1}></Center>
        </NativeBaseProvider>
      ) : (
        <>
          {/* <Text>{mappedProducts}</Text> */}
          <Text>hello</Text>
        </>
      )}
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({});
