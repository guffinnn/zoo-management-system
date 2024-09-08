import './SearchBox.css';

import { getMethods } from '@constants/getMethods.ts';
import { searchMethods } from '@constants/searchMethods.ts';
import {
  DEFAULT_DEBOUNCE_DELAY,
  DEFAULT_SEARCH_MIN_LENGTH,
} from '@constants/values.ts';
import { DataType } from '@custom-types/dataType.ts';
import { useDebounce } from '@hooks/useDebounce.ts';
import React, { JSX, useEffect, useState } from 'react';

interface SearchBoxProps<T> {
  typeOfData: DataType;
  setData: React.Dispatch<React.SetStateAction<T[]>>;
}

function SearchBox<T>({ typeOfData, setData }: SearchBoxProps<T>): JSX.Element {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');

  const debouncedValue = useDebounce({
    value: value,
    delay: DEFAULT_DEBOUNCE_DELAY,
  });

  useEffect(() => {
    const fetchData = async () => {
      if (debouncedValue.trim().length < DEFAULT_SEARCH_MIN_LENGTH) {
        const method = getMethods[typeOfData];
        const allData = await method();
        setData(allData as T[]);
      } else {
        const sort = searchMethods[typeOfData];
        const sortedData = await sort(debouncedValue);
        setData(sortedData as T[]);
      }
    };
    fetchData();
  }, [debouncedValue]);

  const handleClick = (value: boolean) => {
    setIsActive(value);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setValue(e.currentTarget.value);
  };

  return (
    <div className={`search__box__container ${isActive ? 'clicked' : null}`}>
      <input
        type="text"
        id="search"
        placeholder="Поиск"
        className={`search__box`}
        onFocus={() => handleClick(true)}
        onBlur={() => handleClick(false)}
        onChange={handleChange}
        value={value}
      />
    </div>
  );
}

export default SearchBox;
