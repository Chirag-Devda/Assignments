import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  loading: false,
  error: null,
};

const API_URL = "https://api.pujakaitem.com/api/products";

export const fetchAllProducts = createAsyncThunk(
  "products/fetchAll", // Action type
  async () => {
    console.log("fetching.....");
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fiterCategory(state, action) {
      const { category } = action.payload;
      const filteredCategory = state.products.filter((product) => {
        return product.category === category;
      });
      state.products = filteredCategory;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { fiterCategory } = productsSlice.actions;

export default productsSlice.reducer;
