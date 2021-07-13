import * as actionTypes from "../actions/types";

const initialState = {
  items: [],
  loading: true,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_CART:
      const newItem = action.payload;

      if (state.items.find((item) => item.id === newItem.id)) {
        const foundItem = state.items.find((item) => item.id === newItem.id);
        foundItem.quantity += newItem.quantity;
        return { ...state, items: [...state.items] };
      } else {
        return { ...state, items: [...state.items, newItem] };
      }
    case actionTypes.REMOVE_FROM_CART:
      console.log(state.items, "reducer");
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case actionTypes.CHECK_OUT_CART:
      alert("Thank you");
      return { ...state, items: [] };
    default:
      return state;
  }
};

export default cartReducer;
