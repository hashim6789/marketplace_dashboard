import React, { useState } from "react";
import Button from "../ui/Button";
import FilterSection from "./FilterSection";
import { type SelectedFilters } from "../../types";
import { FILTER_DATA } from "../../constants";

const Filters: React.FC = () => {
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({
    businessType: [],
    category: [],
    subCategory: [],
  });

  const handleFilterSelect = (
    section: keyof SelectedFilters,
    label: string
  ) => {
    setSelectedFilters((prev) => {
      const current = prev[section];
      const updated = current.includes(label)
        ? current.filter((item) => item !== label)
        : [...current, label];
      return { ...prev, [section]: updated };
    });
  };

  const handleClearAll = () => {
    setSelectedFilters({
      businessType: [],
      category: [],
      subCategory: [],
    });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold">Filters</h3>
        <Button
          label="Clear All"
          variant="outline"
          rounded="full"
          onClick={handleClearAll}
        />
      </div>

      <FilterSection
        title="Business Type"
        options={FILTER_DATA.businessType}
        selectedLabels={selectedFilters.businessType}
        onSelect={(label) => handleFilterSelect("businessType", label)}
      />
      <FilterSection
        title="Category"
        options={FILTER_DATA.category}
        selectedLabels={selectedFilters.category}
        onSelect={(label) => handleFilterSelect("category", label)}
      />
      <FilterSection
        title="Sub Category"
        options={FILTER_DATA.subCategory}
        selectedLabels={selectedFilters.subCategory}
        onSelect={(label) => handleFilterSelect("subCategory", label)}
      />
    </div>
  );
};

export default Filters;
