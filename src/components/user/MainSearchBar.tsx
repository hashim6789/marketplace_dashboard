import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";

interface SearchBarProps {
  categories: string[];
  onSearch: (query: string, category: string) => void;
}
const MainSearchBar: React.FC<SearchBarProps> = ({ categories, onSearch }) => {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (query.trim()) {
        onSearch(query, selectedCategory);
      }
    }, 500); // ⏱ Adjust debounce delay as needed

    return () => clearTimeout(delayDebounce);
  }, [onSearch, query, selectedCategory]);

  return (
    <div className="w-full flex flex-col sm:flex-row items-center bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
      {/* Category Dropdown */}
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="w-full sm:w-auto px-4 py-2 bg-gray-50 text-sm border-r-0 sm:border-r border-gray-200 outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
        aria-label="Select category"
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      {/* Search Input and Button Container */}
      <div className="w-full flex items-center flex-grow">
        <div className="w-full flex items-center px-4 py-2">
          <Search className="text-gray-400 mr-2 h-5 w-5" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={`Search for ${selectedCategory.toLowerCase()}...`}
            className="w-full text-sm outline-none placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 transition-all"
            aria-label="Search input"
          />
        </div>
      </div>
    </div>
  );
};

export default MainSearchBar;
