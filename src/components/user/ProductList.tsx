import ProductCard from "./ProductCard";
import type { Product } from "../../types";

const productsList: Product[] = [
  {
    name: "3M Speedglas Welding Helmet",
    brandLogo: "/logos/3m.png",
    unspc: "46181700",
    price: 1200,
    stock: 10,
    category: "Safety Helmet",
    description: "High-performance welding helmet with auto-darkening filter.",
    images: ["/images/welding-helmet.jpg"],
    vendor: "3M",
    status: "active",
  },
  {
    name: "MSA V-Gard Yellow Safety Helmet",
    brandLogo: "/logos/msa.png",
    unspc: "RYPTY3655",
    price: 450,
    stock: 25,
    category: "Safety Helmet",
    description: "Durable helmet with comfortable fit and fast delivery.",
    images: ["/images/yellow-helmet.jpg"],
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
