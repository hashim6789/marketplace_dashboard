export interface FilterOption {
  label: string;
  count: number;
}

export interface FilterData {
  businessType: FilterOption[];
  category: FilterOption[];
  subCategory: FilterOption[];
}

export interface SelectedFilters {
  businessType: string[];
  category: string[];
  subCategory: string[];
}

export const FILTER_DATA: FilterData = {
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
