export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export const sortOptions: SortOptionType[] = [
  { item: "Latest", value: "latest" },
  { item: "A-Z", value: "A-Z" },
  { item: "Z-A", value: "Z-A" },
  { item: "Price Low -> High", value: "priceLowToHigh" },
  { item: "Price High -> Low", value: "priceHighToLow" },
];

export type SortOptionType = { item: string; value: string };

export interface ListResponse<T> {
  data: T[];
  totalPages: number;
  currentPage: number;
}
