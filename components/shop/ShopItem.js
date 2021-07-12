import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { SHOP_DETAIL } from "../navigations/types";

const ShopItem = ({ shop, navigation }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate(SHOP_DETAIL, { shop })}
      >
        <Text>{shop.name}</Text>
        <Image
          source={{ uri: shop.image }}
          style={{ width: 200, height: 200 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ShopItem;
