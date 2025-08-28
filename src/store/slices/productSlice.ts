import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { productsList, type Product, type ProductStatus } from "../../types";

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
  products: productsList,
  currentPage: 1,
  totalPage: 1,
  limit: 8,
  sortBy: "",
  category: "",
  status: "active",
  search: "",
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    setSortBy(state, action: PayloadAction<string>) {
      state.sortBy = action.payload;
    },

    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setTotalPage(state, action: PayloadAction<number>) {
      state.totalPage = action.payload;
    },
    setProducts(state, action: PayloadAction<Product[]>) {
      state.products = action.payload;
    },
  },
});

export const {
  setCurrentPage,
  setTotalPage,
  setProducts,
  setSearch,
  setSortBy,
} = productSlice.actions;
export default productSlice.reducer;
