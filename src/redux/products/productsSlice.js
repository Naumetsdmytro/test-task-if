import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchProducts, fetchProductById } from "./operations";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    selectedProduct: null,
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.products = action.payload;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.selectedProduct = action.payload;
      })
      .addMatcher(
        isAnyOf(fetchProducts.pending, fetchProductById.pending),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(fetchProductById.rejected, fetchProducts.rejected),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export const productsReducer = productsSlice.reducer;
