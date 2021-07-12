import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import productReducer from "./productReducer";
import shopReducer from "./shopReducer";

const bigR = combineReducers({
  productReducer,
  shopReducer,
  cartReducer,
  // authReducer,
});

export default bigR;
