import React from "react";

interface FilterItemProps {
  label: string;
  count: number;
  isSelected: boolean;
  onSelect: () => void;
}

const FilterItem: React.FC<FilterItemProps> = ({
  label,
  count,
  isSelected,
  onSelect,
}) => {
  return (
    <li
      className={`cursor-pointer flex justify-between items-center px-2 py-1 rounded ${
        isSelected
          ? "bg-blue-100 text-blue-700 font-medium"
          : "hover:bg-gray-100"
      }`}
      onClick={onSelect}
    >
      <span>{label}</span>
      <span className="text-sm text-gray-500">({count})</span>
    </li>
  );
};

export default FilterItem;
