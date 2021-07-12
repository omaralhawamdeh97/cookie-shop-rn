import * as actionTypes from "../actions/types";

const initialState = {
  items: [],

  loading: true,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_CART:
      const newItem = action.payload;
      console.log(state.items);
      if (state.items.find((item) => item.id === newItem.id)) {
        const foundItem = state.items.find((item) => item.id === newItem.id);
        foundItem.quantity += newItem.quantity;
        return { ...state, items: [...state.items] };
      } else {
        return { ...state, items: [...state.items, newItem] };
      }

    default:
      return state;
  }
};

export default cartReducer;
