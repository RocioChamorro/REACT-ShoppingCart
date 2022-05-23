import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../helpers/getProducts";

const initialState = {
  products: [],
  cart: [],
  status: null
};

export const productsFetch = createAsyncThunk(
  "products/productsFetch",
  async() => {
    const response = await getProducts();
    return response?.products
  }
)

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCard(state) {
    },
    removeOneFromCart(state) {
    },
    removeAllFromCart(state, action) {
    },
    clearCart(state) {
    },
    totalCartSum(state) {
    },
    createNewProduct(state) {
    },
  },
  extraReducers:{
    [productsFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [productsFetch.fulfilled]: (state, action) => {
      state.status = "success";
      state.products = action.payload;
    },
    [productsFetch.rejected]: (state, action) => {
      state.status = "rejected";
    },
  }
});

export const { increment, decrement, incrementByAmount } =
  productsSlice.actions;
export default productsSlice.reducer;
