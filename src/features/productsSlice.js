import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { getProducts } from "../helpers/getProducts";

const initialState = {
  products: [],
  cart: [],
  status: null,
};

export const productsFetch = createAsyncThunk(
  "products/productsFetch",
  async () => {
    const response = await getProducts();
    if (response) {
      const products = convertData(response.products);
      return products;
    }
  }
);

const convertData = (entities) => {
  let result = [];
  if (entities) {
    entities.forEach((product) => {
      const entity = {
        id: product.identificación,
        name: product.nombre,
        price: product.precio,
        quantity: product.cantidad,
        tempQuantity: 1,
      };
      result.push(entity);
    });
  }
  return result;
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addAnAmount(state, action) {
      const itemIndex = state.products.findIndex(
        (item) => item.id === action.payload.id
      );

      let product = state.products[itemIndex];
      if (product.quantity > product.tempQuantity) product.tempQuantity += 1;
      else toast.info("Solo puede agregar la cantidad disponible del producto", {position: "bottom-left"});
    },
    subtractAnAmount(state, action) {
      const itemIndex = state.products.findIndex(
        (item) => item.id === action.payload.id
      );

      let product = state.products[itemIndex];
      if (product.tempQuantity > 1) product.tempQuantity -= 1;
    },
    updateProductAvailability(state, action) {

      action.payload.forEach(cartProduct => {
        const itemIndex = state.products.findIndex(
          (item) => item.id === cartProduct.id
        );
        state.products[itemIndex].quantity -= cartProduct.cartQuantity;
      });
    }
  },
  extraReducers: {
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
  },
});

export const { addAnAmount, subtractAnAmount, updateProductAvailability } =
  productsSlice.actions;
export default productsSlice.reducer;
