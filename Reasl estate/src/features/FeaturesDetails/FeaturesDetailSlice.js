import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  features: {
    nonVeg: "",
    petsAllowed: "",
    electricity: "",
    waterSupply: "",
    furnishing: [],
    additionalFeatures: [],
    tiles: [],
    safety: [],
    societyAmenities: [],
  },
};

export const fetauresDetailSlice = createSlice({
  name: "propertyFeatures",
  initialState,
  reducers: {
    handleFeaturesData: (state, action) => {
      const { name, value } = action.payload;
      state.features = { ...state.features, [name]: value };
    },
    addFeatures: (state, action) => {
      const { name, value } = action.payload;
      state.features[name].push(value);
    },
    removeFeatures: (state, action) => {
      const { name, value } = action.payload;

      const newArray = state.features[name].filter((item) => {
        return item !== value;
      });

      state.features[name] = newArray;
    },
  },
});

export const { handleFeaturesData, addFeatures, removeFeatures } =
  fetauresDetailSlice.actions;

export default fetauresDetailSlice.reducer;
