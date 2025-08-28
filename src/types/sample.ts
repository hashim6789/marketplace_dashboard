export const sortOptions: SortOptionType[] = [
  { item: "Latest", value: "latest" },
  { item: "A-Z", value: "A-Z" },
  { item: "Z-A", value: "Z-A" },
  { item: "Price Low -> High", value: "priceLowToHigh" },
  { item: "Price High -> Low", value: "priceHighToLow" },
];

export type SortOptionType = { item: string; value: string };
