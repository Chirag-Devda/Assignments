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
    updateCartItemQuantity(state, action) {
      const { itemId, newQuantity } = action.payload;
      const itemToUpdate = state.items.find((item) => item.id === itemId);

      if (itemToUpdate) {
        itemToUpdate.quantity = newQuantity;
      }
    },
    deleteCartItem(state, action) {
      const newItems = state.items.filter((item) => item.id !== action.payload);
      return { ...state, items: newItems };
    },
    saveItemsToLocalStorage(state) {
      try {
        localStorage.setItem("cartItems", JSON.stringify(state.items));
      } catch (error) {
        console.error("Error saving items to localStorage", error);
      }
    },
    loadItemsFromLocalStorage(state) {
      try {
        const cartData = localStorage.getItem("cartItems");
        if (cartData) {
          state.items = JSON.parse(cartData);
        }
      } catch (error) {
        console.error("Failed to get item from localStorage", error);
      }
    },
  },
});

export const {
  addItemToCart,
  updateCartItemQuantity,
  deleteCartItem,
  saveItemsToLocalStorage,
  loadItemsFromLocalStorage,
} = cartSlice.actions;
export default cartSlice.reducer;
