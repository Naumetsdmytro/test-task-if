import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://65a9003f219bfa37186824f4.mockapi.io/api";

export const fetchProducts = createAsyncThunk(
  "/products/fetchAll",
  async (page, { rejectWithValue }) => {
    try {
      const response = await axios.get("/products", {
        params: { page, limit: 6 },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchProductById = createAsyncThunk(
  "products/fetchById",
  async (productId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/products/${productId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
