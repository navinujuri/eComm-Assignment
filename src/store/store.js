import { configureStore } from '@reduxjs/toolkit';
import  productReducer from '../Components/ProductList/ProductCard/productslice'

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});
