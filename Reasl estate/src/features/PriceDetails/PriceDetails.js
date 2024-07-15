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
    setPrice: (state, action) => {
      state.price = action.payload;
    },
  },
});

export const { handlePriceData, setPrice } = priceDetailSlice.actions;

export default priceDetailSlice.reducer;
