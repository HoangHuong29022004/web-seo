/**
 * Car Store - State management cho xe
 * Performance: Zustand nhẹ hơn Redux, không cần provider wrapper
 */

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Car, CarFilter } from '@/types/car';

interface CarState {
  // State
  cars: Car[];
  selectedCar: Car | null;
  filter: CarFilter;
  isLoading: boolean;
  error: string | null;

  // Actions
  setCars: (cars: Car[]) => void;
  setSelectedCar: (car: Car | null) => void;
  setFilter: (filter: CarFilter) => void;
  clearFilter: () => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useCarStore = create<CarState>()(
  persist(
    (set) => ({
      // Initial state
      cars: [],
      selectedCar: null,
      filter: {},
      isLoading: false,
      error: null,

      // Actions
      setCars: (cars) => set({ cars }),
      setSelectedCar: (car) => set({ selectedCar: car }),
      setFilter: (filter) => set({ filter }),
      clearFilter: () => set({ filter: {} }),
      setLoading: (loading) => set({ isLoading: loading }),
      setError: (error) => set({ error }),
    }),
    {
      name: 'car-storage', // localStorage key
      partialize: (state) => ({ filter: state.filter }), // Chỉ persist filter
    }
  )
);

