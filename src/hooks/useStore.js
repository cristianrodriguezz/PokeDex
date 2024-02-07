import { create } from "zustand";
import { FILTER } from "../constants/filter";

export const useStoreFilter = create((set) => ({
  filters: {
    sortOrder: FILTER.NONE, 
  },
  setFilters: (newFilters) => set({ filters: newFilters }),

  filterAndSortData: (data) => {
    const { sortOrder } = useStoreFilter.getState().filters;

    // Verificar si sortOrder es 'ascending' o 'descending', de lo contrario, no se aplica ningún filtro
    // En este caso estoy usando una constante en otro archivo para poder utilizarlo y se tiene que cambiar se cambia una sola vez
    if (sortOrder === FILTER.ASC) {
      // Ordenar los datos por altura en orden ascendente
      //...data es la copia del array original
      return [...data].sort((a, b) => a.height - b.height);
    } else if (sortOrder === FILTER.DESC) {
      // Ordenar los datos por altura en orden descendente
      return [...data].sort((a, b) => b.height - a.height);
    } else {
      // No se aplica ningún filtro
      return data;
    }
  }
}));
