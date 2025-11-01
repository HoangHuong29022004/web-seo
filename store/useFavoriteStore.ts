/**
 * Favorite Store - Quản lý xe yêu thích
 * Performance: Persist vào localStorage, không cần fetch lại
 */

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface FavoriteState {
  // State
  favorites: string[]; // Array of car IDs

  // Actions
  addFavorite: (carId: string) => void;
  removeFavorite: (carId: string) => void;
  toggleFavorite: (carId: string) => void;
  isFavorite: (carId: string) => boolean;
  clearFavorites: () => void;
}

export const useFavoriteStore = create<FavoriteState>()(
  persist(
    (set, get) => ({
      // Initial state
      favorites: [],

      // Actions
      addFavorite: (carId) =>
        set((state) => ({
          favorites: [...new Set([...state.favorites, carId])],
        })),

      removeFavorite: (carId) =>
        set((state) => ({
          favorites: state.favorites.filter((id) => id !== carId),
        })),

      toggleFavorite: (carId) => {
        const { favorites } = get();
        if (favorites.includes(carId)) {
          get().removeFavorite(carId);
        } else {
          get().addFavorite(carId);
        }
      },

      isFavorite: (carId) => get().favorites.includes(carId),

      clearFavorites: () => set({ favorites: [] }),
    }),
    {
      name: 'favorite-storage',
    }
  )
);

