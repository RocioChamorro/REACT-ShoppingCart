import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCard(state, action) {
      console.log('sateCARDD',state.cartItems)
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += action.payload.tempQuantity;
      } else {
        const tempProduct = { ...action.payload, cartQuantity: action.payload.tempQuantity };
        state.cartItems.push(tempProduct);
      }
    },
    removeProductFromCart(state) {},
    clearCart(state) {},
    totalCartSum(state) {},
    createNewProduct(state) {},
  },
});

export const { addToCard, removeProductFromCart } = cartSlice.actions;
export default cartSlice.reducer;
