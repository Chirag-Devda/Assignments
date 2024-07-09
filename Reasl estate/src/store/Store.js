import { configureStore } from "@reduxjs/toolkit";
import PropertyDetailsReducer from "../features/PropertyDetails/PropertyDetailSlice.js";

export const store = configureStore({
  reducer: {
    productDetails: PropertyDetailsReducer,
  },
});
