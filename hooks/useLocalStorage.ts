import { useState, useEffect } from 'react';

/**
 * Hook để lưu state vào localStorage
 * Performance: Persist data, giảm API calls
 * 
 * @example
 * const [favorites, setFavorites] = useLocalStorage('favorites', []);
 */
export function useLocalStorage<T>(key: string, initialValue: T) {
  // State để lưu giá trị
  const [storedValue, setStoredValue] = useState<T>(initialValue);
  const [isLoading, setIsLoading] = useState(true);

  // Load từ localStorage khi component mount
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        const item = window.localStorage.getItem(key);
        if (item) {
          setStoredValue(JSON.parse(item));
        }
      }
    } catch (error) {
      console.error('Error loading from localStorage:', error);
    } finally {
      setIsLoading(false);
    }
  }, [key]);

  // Wrapper function để lưu vào localStorage
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  };

  return [storedValue, setValue, isLoading] as const;
}

