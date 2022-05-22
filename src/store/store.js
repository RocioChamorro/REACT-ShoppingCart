import { configureStore } from "@reduxjs/toolkit";
import productsSlice, { productsFetch } from "../features/productsSlice";

export const store = configureStore({
    reducer: {
        products: productsSlice
    }
});

store.dispatch(productsFetch());


