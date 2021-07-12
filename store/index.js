import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
// import { checkForToken } from "./actions/authActions";
import { fetchProducts } from "./actions/productActions";
import { fetchShops } from "./actions/shopActions";
import bigR from "./reducers/bigR";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(bigR, applyMiddleware(thunk));

store.dispatch(fetchProducts());
store.dispatch(fetchShops());
// store.dispatch(checkForToken());
export default store;
