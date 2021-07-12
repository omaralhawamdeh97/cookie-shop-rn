import * as actionTypes from "./types";

export const addItemToCart = (newItem) => {
  return { type: actionTypes.ADD_CART, payload: newItem };
};
