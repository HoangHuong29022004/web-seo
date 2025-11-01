/**
 * UI Store - Quản lý UI state (sidebar, modals, theme, etc)
 * Performance: Global UI state không cần prop drilling
 */

import { create } from 'zustand';

interface UIState {
  // State
  isSidebarOpen: boolean;
  isSearchModalOpen: boolean;
  isContactModalOpen: boolean;
  theme: 'light' | 'dark';

  // Actions
  toggleSidebar: () => void;
  openSidebar: () => void;
  closeSidebar: () => void;
  toggleSearchModal: () => void;
  openSearchModal: () => void;
  closeSearchModal: () => void;
  toggleContactModal: () => void;
  openContactModal: () => void;
  closeContactModal: () => void;
  setTheme: (theme: 'light' | 'dark') => void;
  toggleTheme: () => void;
}

export const useUIStore = create<UIState>()((set) => ({
  // Initial state
  isSidebarOpen: false,
  isSearchModalOpen: false,
  isContactModalOpen: false,
  theme: 'light',

  // Actions
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  openSidebar: () => set({ isSidebarOpen: true }),
  closeSidebar: () => set({ isSidebarOpen: false }),

  toggleSearchModal: () => set((state) => ({ isSearchModalOpen: !state.isSearchModalOpen })),
  openSearchModal: () => set({ isSearchModalOpen: true }),
  closeSearchModal: () => set({ isSearchModalOpen: false }),

  toggleContactModal: () => set((state) => ({ isContactModalOpen: !state.isContactModalOpen })),
  openContactModal: () => set({ isContactModalOpen: true }),
  closeContactModal: () => set({ isContactModalOpen: false }),

  setTheme: (theme) => set({ theme }),
  toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
}));

