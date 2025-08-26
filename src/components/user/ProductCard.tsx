import type { FC } from "react";
import type { Product } from "../../types";
import productImage from "../../assets/img/product_01.png";
import Button from "../ui/Button";

interface ProductCardProps {
  product: Product;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="border border-[#E0E0E0] rounded-md bg-white shadow-sm hover:shadow-md transition duration-200 w-full">
      <div className="flex flex-col gap-4 items-start">
        {/* Product Image */}
        <img
          src={productImage}
          // src={product.images[0]}
          alt={product.name}
          className="w-64 h-64 object-contain"
        />

        {/* Product Details */}
        <div className="flex flex-col justify-between px-4 flex-grow">
          <div>
            <p className="text-xs text-[#828282] mb-1">
              Brand: {product.vendor}
            </p>
            <h3 className="text-sm font-semibold text-[#333333] mb-1">
              {product.name}
            </h3>
            <p className="text-xs text-[#828282] mb-1">
              UNSPSC: <span className="font-semibold">{product.unspc}</span>
            </p>
            <p className="text-xs text-[#828282]">
              Category:{" "}
              <span className="font-semibold">{product.category}</span>
            </p>
          </div>

          <div className="my-6">
            <Button
              label="Send Enquiry"
              color="standard"
              variant="solid"
              className="rounded-md"
              rounded="md"
              fullWidth
              size="sm"
              type="button"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
