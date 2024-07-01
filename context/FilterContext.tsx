'use client';
import { createContext, useState, type PropsWithChildren } from 'react';

type FilterContextType = {
  filters: string[];
  addFilter: (filter: string) => void;
  removeFilter: (filter: string) => void;
  clearFilters: () => void;
};

const FilterContext = createContext<FilterContextType | null>(null);

export function FilterContextProvider({ children }: PropsWithChildren) {
  const [filters, setFilters] = useState<string[]>([]);

  function addFilter(filter: string) {
    setFilters((prevFilters) =>
      prevFilters.includes(filter) ? prevFilters : [...prevFilters, filter]
    );
  }

  function removeFilter(filter: string) {
    setFilters((prevFilters) => prevFilters.filter((f) => f !== filter));
  }

  const clearFilters = () => setFilters([]);

  return (
    <FilterContext.Provider
      value={{ filters, addFilter, removeFilter, clearFilters }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export default FilterContext;
