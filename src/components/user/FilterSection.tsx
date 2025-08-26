import React from "react";
import clsx from "clsx";

interface FilterOption {
  label: string;
  count: number;
}

interface FilterSectionProps {
  title: string;
  options: FilterOption[];
  selectedLabels: string[];
  onSelect: (label: string) => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({
  title,
  options,
  selectedLabels,
  onSelect,
}) => {
  return (
    <div className="mb-6">
      <h4 className="text-md font-semibold text-[#304EA1] mb-3">{title}</h4>
      <ul className="space-y-2">
        {options.map((option) => {
          const isSelected = selectedLabels.includes(option.label);
          return (
            <li
              key={option.label}
              className="flex items-center justify-between cursor-pointer"
              onClick={() => onSelect(option.label)}
            >
              <label className="flex items-center gap-2 text-sm text-[#304EA1]">
                <input
                  type="checkbox"
                  checked={isSelected}
                  readOnly
                  className="accent-blue-600 w-4 h-4"
                />
                <span
                  className={clsx("font-medium", isSelected && "text-blue-600")}
                >
                  {option.label}
                </span>
              </label>
              <span
                className={clsx(
                  "text-xs text-[#4F547B]",
                  isSelected && "text-blue-600 font-semibold"
                )}
              >
                ({option.count})
              </span>
            </li>
          );
        })}
      </ul>
      <button className="text-blue-600 text-sm mt-3 hover:underline">
        Show more
      </button>
    </div>
  );
};

export default FilterSection;
