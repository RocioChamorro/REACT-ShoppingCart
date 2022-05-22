import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PRODUCTS } from "../data/products";

const initialState = {
  products: [],
  cart: [],
  status: null
};

function getProductsData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(PRODUCTS);
    }, 2000);
  });
}

export const productsFetch = createAsyncThunk(
  "products/productsFetch",
  async() => {
    const response = await getProductsData();
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
