import { DebounceProps } from '@custom-types/debounceProps';
import { useEffect, useState } from 'react';

export function useDebounce({ value, delay }: DebounceProps): string {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      console.log(`Debounced value: ${value}`);
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
