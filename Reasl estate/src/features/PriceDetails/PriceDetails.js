import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  price: {
    rent: "",
    security: "",
    maintainance: "",
    maintainancePrice: "",
    maintainanceDuration: "",
    additionalPricing: "",
  },
};

export const priceDetailSlice = createSlice({
  name: "price",
  initialState,
  reducers: {
    handlePriceData: (state, action) => {
      const { name, value } = action.payload;
      state.price = { ...state.price, [name]: value };
    },
  },
});

export const { handlePriceData } = priceDetailSlice.actions;

export default priceDetailSlice.reducer;
