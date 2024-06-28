import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "../features/Products/AllProducts/ProductsSlice.js";
import singleProductReducer from "../features/Products/SingleProduct/singleProductSlice.js";
import cartReducer from "../features/cart/CartSlice.js";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    singleProduct: singleProductReducer,
    cart: cartReducer,
  },
});
