import { createContext, SetStateAction, useState } from "react";

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

export type SortType = "a-z" | "z-a" | "h-l" | "l-h" | "none";

interface FilterContextType {
  filters: FilterType;
  addFilter: (filterType: keyof FilterType, filterItem: FilterItem) => void;
  removeFilter: (filterType: keyof FilterType, value: string) => void;
  clearFilters: () => void;
  selectedFilters: () => { type: string; label: string; value: string }[];
  sortBy: SortType;
  setSortBy: React.Dispatch<SetStateAction<SortType>>;
}

export const FilterContext = createContext<FilterContextType | undefined>(
  undefined
);

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const [filters, setFilters] = useState<FilterType>(initialFilters);
  const [sortBy, setSortBy] = useState<SortType>("none");

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

  // get all applied filters in a list
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

  return (
    <FilterContext.Provider
      value={{
        filters,
        addFilter,
        removeFilter,
        clearFilters,
        selectedFilters,
        sortBy,
        setSortBy,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
