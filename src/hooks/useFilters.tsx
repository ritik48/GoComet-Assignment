import { useState } from "react";

export type FilterItem = {
  label: string;
  value: string;
};

export type FilterType = {
  priceRange: FilterItem[];
  rating: FilterItem[];
  city: FilterItem[];
};

const initialFilters: FilterType = {
  priceRange: [],
  rating: [],
  city: [],
};

export function useFilters() {
  const [filters, setFilters] = useState<FilterType>(initialFilters);

  const addFilter = (filterType: keyof FilterType, filterItem: FilterItem) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: [...prev[filterType], filterItem],
    }));
  };

  const removeFilter = (filterType: keyof FilterType, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: prev[filterType].filter((item) => item.value !== value),
    }));
  };

  // to get list of all filters that user has selected
  const selectedFilters = () => {
    return Object.entries(filters).flatMap(([type, items]) =>
      items.map((item) => ({
        type,
        label: item.label,
        value: item.value,
      }))
    );
  };

  const clearFilters = () => setFilters(initialFilters);

  return { filters, addFilter, removeFilter, clearFilters, selectedFilters };
}
