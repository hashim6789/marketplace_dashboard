import ProductCard from "./ProductCard";
import type { Product } from "../../types";

import productImage1 from "../../assets/img/product_01.png";
import productImage2 from "../../assets/img/product_02.png";
import productImage3 from "../../assets/img/product_03.png";
import productImage4 from "../../assets/img/product_04.png";
import productImage5 from "../../assets/img/product_05.png";

const productsList: Product[] = [
  {
    name: "3M Speedglas Welding Helmet",
    unspc: "46181700",
    price: 1200,
    stock: 10,
    category: "Safety Helmet",
    description: "High-performance welding helmet with auto-darkening filter.",
    images: [productImage1],
    vendor: "3M",
    status: "active",
  },
  {
    name: "MSA V-Gard Yellow Safety Helmet",
    unspc: "RYPTY3655",
    price: 450,
    stock: 25,
    category: "Safety Helmet",
    description: "Durable helmet with comfortable fit and fast delivery.",
    images: [productImage2],
    vendor: "MSA",
    status: "active",
  },
  {
    name: "MSA V-Gard Yellow Safety Helmet",
    unspc: "RYPTY3655",
    price: 450,
    stock: 25,
    category: "Safety Helmet",
    description: "Durable helmet with comfortable fit and fast delivery.",
    images: [productImage3],
    vendor: "MSA",
    status: "active",
  },
  {
    name: "MSA V-Gard Yellow Safety Helmet",
    unspc: "RYPTY3655",
    price: 450,
    stock: 25,
    category: "Safety Helmet",
    description: "Durable helmet with comfortable fit and fast delivery.",
    images: [productImage4],
    vendor: "MSA",
    status: "active",
  },
  {
    name: "MSA V-Gard Yellow Safety Helmet",
    unspc: "RYPTY3655",
    price: 450,
    stock: 25,
    category: "Safety Helmet",
    description: "Durable helmet with comfortable fit and fast delivery.",
    images: [productImage5],
    vendor: "MSA",
    status: "active",
  },
  // Add more products here...
];

function ProductList() {
  return (
    <div className="px-4 py-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {productsList.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
