import { configureStore } from "@reduxjs/toolkit";

import PropertyDetailsReducer from "../features/PropertyDetails/PropertyDetailSlice.js";
import RegisterDetailReducer from "../features/RegisterDetails/RegisterDetailSlice.js";
import LocationDetailReducer from "../features/LocationDetails/LocationDetailSlice.js";
import FeaturesDetailReducer from "../features/FeaturesDetails/FeaturesDetailSlice.js";
import PriceDetailReducer from "../features/PriceDetails/PriceDetails.js";

export const store = configureStore({
  reducer: {
    registerDetails: RegisterDetailReducer,
    propertyDetails: PropertyDetailsReducer,
    locationDetails: LocationDetailReducer,
    featuresDetails: FeaturesDetailReducer,
    priceDetails: PriceDetailReducer,
  },
});
