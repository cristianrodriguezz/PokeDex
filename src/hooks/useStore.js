import { create } from "zustand";

export const useStoreFilter= create((set) => ({
  filters: {
    height: 'all',
    weight: 'all',
    id: "all",
  },
  setFilters: (newFilters) => set({ filters: newFilters }),
}))