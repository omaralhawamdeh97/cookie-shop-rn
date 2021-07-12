import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../home";
import { CART, HOME, SHOP_DETAIL, SHOP_LIST } from "./types";
import ShopList from "../shop/ShopList";
import ShopDetail from "../shop/ShopDetail";
import CartList from "../cart/CartList";
import CartButton from "../buttons/CartButton";
import { marginRight } from "styled-system";
const { Navigator, Screen } = createStackNavigator();
const RootNavigator = () => {
  return (
    <Navigator
      initialRouteName={HOME}
      screenOptions={{
        headerStyle: {
          backgroundColor: "blue",
        },
        headerTintColor: "white",
        headerTitleStyle: {
          fontStyle: "italic",
          fontWeight: "bold",
        },
      }}
    >
      <Screen name={HOME} component={Home} options={{ headerShown: false }} />
      <Screen
        name={SHOP_LIST}
        component={ShopList}
        options={{ headerRight: () => <CartButton /> }}
      />
      <Screen
        name={SHOP_DETAIL}
        component={ShopDetail}
        options={({ navigation, route }) => ({ title: route.params.shop.name })}
      />
      <Screen name={CART} component={CartList} />
    </Navigator>
  );
};

export default RootNavigator;
