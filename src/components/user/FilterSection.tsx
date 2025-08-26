import React from "react";
import FilterItem from "./FilterItem";

interface FilterOption {
  label: string;
  count: number;
}

interface FilterSectionProps {
  title: string;
  options: FilterOption[];
  selectedLabel: string;
  onSelect: (label: string) => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({
  title,
  options,
  selectedLabel,
  onSelect,
}) => {
  return (
    <div className="mb-6">
      <h4 className="text-md font-semibold mb-2">{title}</h4>
      <ul className="space-y-1">
        {options.map((option) => (
          <FilterItem
            key={option.label}
            label={option.label}
            count={option.count}
            isSelected={selectedLabel === option.label}
            onSelect={() => onSelect(option.label)}
          />
        ))}
      </ul>
      <button className="text-blue-600 text-sm mt-2 hover:underline">
        Show more
      </button>
    </div>
  );
};

export default FilterSection;
