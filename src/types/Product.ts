export interface Product {
  name: string;
  unspc: string;
  price: number;
  stock: number;
  category: string;
  description: string;
  images: string[];
  vendor: string;
  status: ProductStatus;
}

export type ProductStatus = "active" | "out-of-stock";

export type SortType =
  | "priceLowToHigh"
  | "priceHighToLow"
  | "A-Z"
  | "Z-A"
  | "latest";
