import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store";
import { setProducts, setTotalPage } from "../store/slices/productSlice";
import { productsList, type ListResponse, type Product } from "../types";
import { axiosInstance } from "../configs";

export function useProducts() {
  const dispatch = useDispatch();
  const { search, sortBy, currentPage, limit } = useSelector(
    (state: RootState) => state.products
  );

  const [loading, setLoading] = useState(true);
  const [debouncedQuery, setDebouncedQuery] = useState(search);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(search);
    }, 500);

    return () => clearTimeout(handler);
  }, [search]);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);

      const params = new URLSearchParams({
        query: debouncedQuery,
        sortBy,
        page: currentPage.toString(),
        limit: limit.toString(),
      });

      try {
        const res = await axiosInstance.get<ListResponse<Product>>(
          `/api/products?${params.toString()}`
        );

        let data = res.data.data;
        let totalPages = res.data.totalPages;

        //comment when production
        data = productsList; //for testing
        totalPages = 2; //for testing

        dispatch(setProducts(data));
        dispatch(setTotalPage(totalPages));
      } catch (err) {
        console.error("Failed to fetch products:", err);

        //comment when production
        // dispatch(setProducts([]));

        dispatch(setProducts(productsList)); //for testing
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [debouncedQuery, sortBy, currentPage, limit, dispatch]);

  const products = useSelector((state: RootState) => state.products.products);
  return { products, loading };
}
