import * as actionTypes from "./types";

export const addItemToCart = (newItem) => {
  return { type: actionTypes.ADD_CART, payload: newItem };
};

export const deleteItemFromCart = (itemId) => {
  return { type: actionTypes.REMOVE_FROM_CART, payload: itemId };
};

export const checkOutCart = () => {
  return { type: actionTypes.CHECK_OUT_CART };
};
