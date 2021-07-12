import axios from "axios";
import * as actionTypes from "./types";
import instance from "./instance";
// ACTIONS
// export const addProduct = (newProduct) => {
//   return async (dispatch) => {
//     try {
//       const token = localStorage.getItem("myToken");
//       instance.defaults.headers.common.Authorization = `Bearer ${token}`;
//       const formData = new FormData();
//       for (const key in newProduct) formData.append(key, newProduct[key]);
//       const res = await instance.post(
//         `/shops/${newProduct.shopId}/products`,
//         formData
//       );
//       dispatch({
//         type: actionTypes.ADD_PRODUCT,
//         payload: { newProduct: res.data },
//       });
//     } catch (error) {
//       if (error.message.includes("401")) {
//         dispatch({
//           type: actionTypes.SET_USER,
//           payload: null,
//         });
//       } else {
//         console.log(error);
//       }
//     }
//   };
// };

// export const deleteProduct = (productId) => {
//   return async (dispatch) => {
//     try {
//       const token = localStorage.getItem("myToken");
//       instance.defaults.headers.common.Authorization = `Bearer ${token}`;
//       await instance.delete(`/products/${productId}`);
//       dispatch({ type: actionTypes.DELETE_PRODUCT, payload: { productId } });
//     } catch (error) {
//       if (error.message.includes("401")) {
//         dispatch({
//           type: actionTypes.SET_USER,
//           payload: null,
//         });
//       } else {
//         console.log(error);
//       }
//     }
//   };
// };

// export const updateProduct = (updatedProduct) => {
//   return async (dispatch) => {
//     try {
//       const token = localStorage.getItem("myToken");
//       instance.defaults.headers.common.Authorization = `Bearer ${token}`;
//       const formData = new FormData();
//       for (const key in updatedProduct)
//         formData.append(key, updatedProduct[key]);
//       const res = await instance.put(
//         `/products/${updatedProduct.id}`,
//         formData
//       );

//       dispatch({
//         type: actionTypes.UPDATE_PRODUCT,
//         payload: { updatedProduct: res.data },
//       });
//     } catch (error) {
//       if (error.message.includes("401")) {
//         dispatch({
//           type: actionTypes.SET_USER,
//           payload: null,
//         });
//       } else {
//         console.log(error);
//       }
//     }
//   };
// };

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/products");
      dispatch({
        type: actionTypes.FETCH_PRODUCT,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
