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
