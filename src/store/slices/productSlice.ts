import { createSlice } from "@reduxjs/toolkit";
import type { Product, ProductStatus } from "../../types";

interface ProductState {
  products: Product[];
  currentPage: number;
  totalPage: number;
  limit: number;
  sortBy: string;
  category: string;
  status: ProductStatus;
  search: string;
}

const initialState: ProductState = {
  products: [],
  currentPage: 1,
  totalPage: 1,
  limit: 12,
  sortBy: "",
  category: "",
  status: "active",
  search: "",
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

// export const {} = productSlice.actions;
export default productSlice.reducer;
