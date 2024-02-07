import { create } from "zustand";

export const useStoreFilter = create((set) => ({
  filters: {
    sortOrder: 'ascending', // Orden por defecto
  },
  setFilters: (newFilters) => set({ filters: newFilters }),

  filterAndSortData: (data) => {
    const { sortOrder } = useStoreFilter.getState().filters;

    // Ordenar los datos por altura
    let sortedData = [...data];
    sortedData.sort((a, b) => {
      const heightA = a.height;
      const heightB = b.height;

      // Comparar los valores según el sortOrder
      if (sortOrder === "ascending") {
        return heightA - heightB; // Ascendente
      } else {
        return heightB - heightA; // Descendente
      }
    });

    return sortedData;
  }
}));
