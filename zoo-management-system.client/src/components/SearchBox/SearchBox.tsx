import './SearchBox.css';

import { JSX, useState } from 'react';

function SearchBox(): JSX.Element {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleClick = (value: boolean) => {
    setIsActive(value);
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
      />
    </div>
  );
}

export default SearchBox;
