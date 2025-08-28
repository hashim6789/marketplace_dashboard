import { useProducts } from "../../hooks/useProducts";
import { sortOptions, type SortType } from "../../types";
import Dropdown from "../ui/Dropdown";
import SearchBar from "../ui/Searchbar";
import { useState } from "react";

function ContentSearch() {
  const [selected, setSelected] = useState<SortType>("latest");
  const [query, setQuery] = useState("");

  const { products, loading } = useProducts({ query, sortBy: selected });

  return (
    <div className="w-full px-4">
      {/* Search header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-2">
        <p className="text-sm text-[#000000] font-semibold">
          Showing results for:{" "}
          <span className="text-[#304EA1]">
            Road alignment planning and design
          </span>
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-6 w-full sm:w-auto">
          <SearchBar
            value={query}
            onChange={setQuery}
            placeholder="Search items..."
          />
          <Dropdown
            options={sortOptions}
            value={selected}
            onChange={setSelected}
          />
        </div>
      </div>

      {/* Product results */}
      <div className="mt-4">
        {loading ? (
          <p className="text-sm text-gray-500">Loading products...</p>
        ) : products.length === 0 ? (
          <p className="text-sm text-red-500">No products found.</p>
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {products.map((product) => (
              <li key={product.unspc} className="border p-3 rounded-md">
                <h3 className="font-semibold text-[#304EA1]">{product.name}</h3>
                <p className="text-sm text-gray-600">{product.description}</p>
                <p className="text-xs text-gray-400">
                  Vendor: {product.vendor}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default ContentSearch;
