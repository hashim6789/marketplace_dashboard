import ProductCard from "./ProductCard";
import ProductSkeleton from "../ui/ProductSkeleton"; // new
import { useProducts } from "../../hooks/useProducts";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";

function ProductList() {
  const { loading } = useProducts();
  const products = useSelector((state: RootState) => state.products.products);
  const limit = useSelector((state: RootState) => state.products.limit);

  const renderContent = () => {
    if (loading) {
      return Array.from({ length: limit }).map((_, index) => (
        <ProductSkeleton key={index} />
      ));
    }
    if (products.length === 0) {
      return (
        <div className="col-span-full text-center py-10 text-gray-500">
          No products found.
        </div>
      );
    }
    return products.map((product, index) => (
      <ProductCard key={index} product={product} />
    ));
  };

  return (
    <div className="px-4 py-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {renderContent()}
      </div>
    </div>
  );
}

export default ProductList;
