import React, { useState } from "react";
import Button from "../ui/Button";
import FilterSection from "./FilterSection";

interface FilterOption {
  label: string;
  count: number;
}

interface FilterData {
  businessType: FilterOption[];
  category: FilterOption[];
  subCategory: FilterOption[];
}

interface SelectedFilters {
  businessType: string[];
  category: string[];
  subCategory: string[];
}

const FILTER_DATA: FilterData = {
  businessType: [
    { label: "All", count: 13 },
    { label: "Supplier", count: 12 },
    { label: "Service Provider", count: 13 },
    { label: "Manufacturer", count: 67 },
    { label: "Distribution", count: 12 },
    { label: "Contract Services", count: 13 },
  ],
  category: [
    { label: "General Civil Contracting", count: 18 },
    { label: "Utilities and Services", count: 12 },
    { label: "Earthworks and Site Preparation", count: 23 },
    { label: "Concrete Works", count: 23 },
    { label: "Steel and Structural Works", count: 34 },
    { label: "Masonry and Finishing Works", count: 12 },
  ],
  subCategory: [
    { label: "Water Supply", count: 11 },
    { label: "Electrical", count: 6 },
    { label: "Sewerage Systems", count: 7 },
    { label: "Drainage Management", count: 7 },
    { label: "Stormwater Management", count: 3 },
    { label: "Gas Pipeline Installation", count: 2 },
  ],
};

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
