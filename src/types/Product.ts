export interface Product {
  name: string;
  unspc: string;
  price: number;
  stock: number;
  category: string;
  description: string;
  images: string[];
  vendor: string;
  status: "active" | "out-of-stock";
}
