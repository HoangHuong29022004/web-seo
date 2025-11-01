import { useState, useCallback } from 'react';

/**
 * Hook để toggle boolean state
 * Performance: useCallback để prevent re-renders
 * 
 * @example
 * const [isOpen, toggleOpen] = useToggle(false);
 * 
 * <button onClick={toggleOpen}>Toggle</button>
 */
export function useToggle(initialValue: boolean = false): [boolean, () => void] {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => {
    setValue(v => !v);
  }, []);

  return [value, toggle];
}

