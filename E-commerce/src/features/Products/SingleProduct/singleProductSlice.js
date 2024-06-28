import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
  loading: false,
  error: null,
};

export const singleProductSlice = createSlice({
  name: "singleProduct",
  initialState,
  reducers: {
    fetchProductStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchProductSuccess(state, action) {
      state.loading = false;
      state.product = action.payload.data;
      state.image = action.payload.image;
    },
    fetchProductFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchProductStart, fetchProductSuccess, fetchProductFailure } =
  singleProductSlice.actions;

export default singleProductSlice.reducer;
