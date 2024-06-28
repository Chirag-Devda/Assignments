import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  singleProduct: [],
  image: "",
};

export const singleProductSlice = createSlice({
  name: "singleProduct",
  initialState,
  reducers: {
    setsingleProduct: (state, action) => {
      state.singleProduct = action.payload.data;
      state.image = action.payload.image;
    },
  },
});

export const { setsingleProduct } = singleProductSlice.actions;

export default singleProductSlice.reducer;
