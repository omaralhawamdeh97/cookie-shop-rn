import axios from "axios";
import * as actionTypes from "../actions/types";
import instance from "./instance";
// ACTIONS
export const fetchShops = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/shops");
      dispatch({
        type: actionTypes.FETCH_SHOP,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
// export const addShop = (newShop) => {
//   return async (dispatch) => {
//     try {
//       const token = localStorage.getItem("myToken");
//       instance.defaults.headers.common.Authorization = `Bearer ${token}`;
//       const formData = new FormData();
//       for (const key in newShop) formData.append(key, newShop[key]);
//       const res = await instance.post("/shops", formData);
//       dispatch({
//         type: actionTypes.ADD_SHOP,
//         payload: { newShop: res.data },
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };
