import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const { product, quantity, thumbnail } = action.payload; // Destructure with default quantity
      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity = existingItem.quantity + quantity; // Update quantity of existing item
        existingItem.thumbnail = thumbnail;
      } else {
        state.items.push({
          ...product,
          quantity: quantity,
          thumbnail: thumbnail,
        }); // Add new item with quantity
      }
    },
  },
});

export const { addItemToCart } = cartSlice.actions;
export default cartSlice.reducer;
