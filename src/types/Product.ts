export interface Product {
  name: string;
  brandLogo: string;
  unspc: string;
  price: number;
  stock: number;
  category: string;
  description: string;
  images: string[];
  vendor: string;
  status: "active" | "out-of-stock";
}
