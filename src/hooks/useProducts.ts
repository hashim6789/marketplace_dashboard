import { useEffect, useState } from "react";
import type { Product, SortType } from "../types";

interface UseProductsParams {
  query: string;
  sortBy: SortType;
}

export function useProducts({ query, sortBy }: UseProductsParams) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  // Debounce logic
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500); // 500ms debounce

    return () => clearTimeout(handler);
  }, [query]);

  // Fetch from backend with query and sortBy
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);

      const params = new URLSearchParams({
        query: debouncedQuery,
        sortBy,
      });

      try {
        const res = await fetch(`/api/products?${params.toString()}`);
        const data: Product[] = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Failed to fetch products:", err);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [debouncedQuery, sortBy]);

  return { products, loading };
}
