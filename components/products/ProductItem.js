import React, { useState } from "react";
import { View, Text, Image, Button } from "react-native";
import NumericInput from "react-native-numeric-input";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/actions/cartActions";
const ProductItem = ({ product }) => {
  const items = useSelector((state) => state.cartReducer.items);
  // console.log(items);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);

  return (
    <View>
      <Text>Product Name : {product.name}</Text>
      <Image
        source={{ uri: product.image }}
        style={{ height: 120, width: 120 }}
      />
      <NumericInput
        onChange={(value) => setQuantity(value)}
        totalWidth={100}
        totalHeight={50}
        iconSize={600}
        rounded
        textColor="#B0228C"
        iconStyle={{ color: "white" }}
        rightButtonBackgroundColor="#EA3788"
        leftButtonBackgroundColor="#E56B70"
        // quantity={quantity}
        // setQuantity={setQuantity}
      />
      <Button
        title="Add"
        onPress={() =>
          dispatch(addItemToCart({ id: product.id, quantity: quantity }))
        }
      />
    </View>
  );
};

export default ProductItem;
