import { configureStore } from "@reduxjs/toolkit";
import PropertyDetailsReducer from "../features/PropertyDetails/PropertyDetailSlice.js";
import RegisterDetailReducer from "../features/RegisterDetails/RegisterDetailSlice.js";

export const store = configureStore({
  reducer: {
    registerDetails: RegisterDetailReducer,
    propertyDetails: PropertyDetailsReducer,
  },
});
