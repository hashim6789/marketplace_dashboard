import React from "react";
import type { SortOptionType, SortType } from "../../types";

interface DropdownProps {
  options: SortOptionType[];
  value: string;
  onChange: (value: SortType) => void;
  className?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  value,
  onChange,
  className,
}) => {
  return (
    <div className={`w-full sm:w-40 ${className || ""}`}>
      <select
        className="w-full border border-[#6A6A6A] rounded-md text-sm px-3 py-[6px] text-[#6A6A6A] focus:outline-none focus:ring-1 focus:ring-[#304EA1]"
        value={value}
        onChange={(e) => onChange(e.target.value as SortType)}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
