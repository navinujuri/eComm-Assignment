import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchAllProducts,
  deleteProductById,
  createProduct,
  getProductById,
  updateById
} from "./productApi";

const initialState = {
  products: [],
  totalPages:null,
  selectedProduct: null,
  productUpdate: null,
  status: "idle",
};

export const createProductAsync = createAsyncThunk(
  "product/createProduct",
  async (formData) => {
    const response = await createProduct(formData);
    return response.data;
  }
);

export const fetchAllProductsAsync = createAsyncThunk(
  "product/fetchAllProducts",
  async (page = 1) => {
    const response = await fetchAllProducts(page);
    return response.data;
  }
);
export const deleteProductByIdAsync = createAsyncThunk(
  "product/deleteById",
  async (productId) => {
    const response = await deleteProductById(productId);
    return response.data;
  }
);

export const getProductByIdAsync = createAsyncThunk(
  "product/getById",
  async (productId) => {
    const response = await getProductById(productId);
    return response.data;
  }
);

export const updateProductByIdAsync = createAsyncThunk(
    "product/updateById",
    async (productId,data) => {
        console.log('dfghj',data)
      const response = await updateById(productId,data);
      return response.data;
    }
  );

export const productSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    clearSelectedProduct: (state) => {
      state.selectedProduct = null;
    },
    // productReset:(productId,data)=>{
    //     // console.log(productId,data)
    //     const index = state.products.findIndex(
    //         (items) => items._id === productId
    //       );
    //       let arr=[...state.products];
    //       arr[index]=data
    //       state.products=[...arr];
    //   }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProductsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload.products;
        state.totalPages=action.payload.totalPages;
        state.productUpdate = null;
      })
      .addCase(deleteProductByIdAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteProductByIdAsync.fulfilled, (state, action) => {
        state.status = "idle";
        const index = state.products.findIndex(
          (items) => items._id === action.payload.id
        );
        state.products.splice(index, 1);
        state.productUpdate = null;
      })
      .addCase(createProductAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createProductAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products.push(action.payload);
        state.productUpdate = null;
      })
      .addCase(getProductByIdAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProductByIdAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.productUpdate = action.payload;
      })
      .addCase(updateProductByIdAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateProductByIdAsync.fulfilled, (state, action) => {
        state.status = "idle";
      });
  },
});

export const { clearSelectedProduct,productReset } = productSlice.actions;

export const selectAllProducts = (state) => state.product.products;
export const totalProductPages = (state) => state.product.totalPages;
export const status = (state) => state.product.status;
export const updatedProductDetails = (state) => state.product.productUpdate;
export default productSlice.reducer;
