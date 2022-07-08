import { combineReducers } from "redux";
import { applyMiddleware } from "redux";
import { legacy_createStore as createStore } from "redux";
import { productReducer } from "./products/reducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { SingleProductReducer } from "./productByID/reducer";
import { CartReducer } from "./cart/reducer";
import { AddToCartReducer } from "./cart/addToCart/reducer";
import { RemoveCartItemReducer } from "./cart/removeFromCart/reducer";
import { WishlistReducer } from "./wishlist/reducer";
import { AddToWishListReducer } from "./wishlist/addToWishlist/reducer";
import { removeWishlistItemReducer } from "./wishlist/removeFromWishlist/reducer";

const root_reducer = combineReducers({
  allProducts: productReducer,
  singleProduct: SingleProductReducer,
  cartData: CartReducer,
  addCart: AddToCartReducer,
  removeCartItem: RemoveCartItemReducer,
  wishlistData: WishlistReducer,
  addToWishlist: AddToWishListReducer,
  removeFromWishlist: removeWishlistItemReducer,
});

const store = createStore(
  root_reducer,
  composeWithDevTools(applyMiddleware(thunk))
);
// store.subscribe(() => console.log(store.getState()));
export default store;
