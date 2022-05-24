import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCard(state, action) {
      console.log("sateCARDD", state.cartItems);
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += action.payload.tempQuantity;
      } else {
        const tempProduct = {
          ...action.payload,
          cartQuantity: action.payload.tempQuantity,
        };
        state.cartItems.push(tempProduct);
      }
    },
    removeProductFromCart(state, action) {
      const _cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload
      );
      state.cartItems = _cartItems;

      //localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    },
    clearCart(state, action) {
      state.cartItems = [];
      //localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    },
    totalCartSum(state) {
      let total = state.cartItems.reduce((total, cartItem) => {
        const { price, cartQuantity } = cartItem;
        const itemTotal = price * cartQuantity;

        total += itemTotal;
        return total;
      },0);
      state.cartTotalAmount = total;
    },
    createNewProduct(state) {},
  },
});

export const { addToCard, removeProductFromCart, clearCart, totalCartSum } =
  cartSlice.actions;
export default cartSlice.reducer;
