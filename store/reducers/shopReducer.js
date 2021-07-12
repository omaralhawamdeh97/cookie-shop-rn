import * as actionTypes from "../actions/types";

const initialState = {
  shops: [],
  loading: true,
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    // case actionTypes.ADD_SHOP:
    //   const { newShop } = action.payload;

    //   return {
    //     ...state,
    //     shops: [...state.shops, newShop],
    //   };
    case actionTypes.FETCH_SHOP:
      return {
        ...state,
        shops: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default shopReducer;
