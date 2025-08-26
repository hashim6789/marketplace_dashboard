import type { FC } from "react";
import type { Product } from "../../types";
import productImage from "../../assets/img/product_01.png";

interface ProductCardProps {
  product: Product;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="border border-gray-200 rounded-md shadow-sm p-4 flex flex-col items-center text-center bg-white hover:shadow-md transition duration-200">
      {/* Product Image */}
      <img
        src={productImage}
        // src={product.images[0]}
        alt={product.name}
        className="w-32 h-32 object-contain mb-4"
      />

      {/* Product Name */}
      <h3 className="text-sm font-semibold text-gray-800 mb-1 line-clamp-2">
        {product.name}
      </h3>

      {/* UNSPSC Code */}
      <p className="text-xs text-gray-500 mb-1">UNSPC: {product.unspc}</p>

      {/* Category */}
      <p className="text-xs text-gray-500 mb-4">Category: {product.category}</p>

      {/* Send Enquiry Button */}
      <button className="mt-auto bg-blue-600 text-white text-sm px-4 py-1.5 rounded hover:bg-blue-700 transition">
        Send Enquiry
      </button>
    </div>
  );
};

export default ProductCard;
