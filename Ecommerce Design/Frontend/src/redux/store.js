import { combineReducers } from "redux";
import { applyMiddleware } from "redux";
import { legacy_createStore as createStore } from "redux";
import { productReducer } from "./products/reducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { SingleProductReducer } from "./productByID/reducer";
import { CartReducer } from "./cart/reducer";

const root_reducer = combineReducers({
  allProducts: productReducer,
    singleProduct: SingleProductReducer,
  cartData : CartReducer
});

const store = createStore(
  root_reducer,
  composeWithDevTools(applyMiddleware(thunk))
);
// store.subscribe(() => console.log(store.getState()));
export default store;
