import React from "react";
import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  placeholder = "Search",
  className = "",
}) => {
  return (
    <div className={`relative w-full sm:w-40 ${className}`}>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pr-10 pl-3 py-[6px] border border-[#6A6A6A] rounded-md text-sm text-[#6A6A6A] placeholder-[#BDBDBD] focus:outline-none focus:ring-1 focus:ring-[#304EA1]"
      />
      <span className="absolute right-3 top-2.5 text-sm">
        <Search className="w-4 h-4 text-[#6A6A6A]" />
      </span>
    </div>
  );
};

export default SearchBar;
