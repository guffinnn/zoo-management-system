import './NavListPoint.css';

import { JSX } from 'react';

interface ListPoint {
  componentKey: number;
  pageItem: {
    link: string;
    name: string;
  };
  activeKey: number | null;
  setActiveKey: (key: number | null) => void;
}

function NavListPoint({
  componentKey,
  pageItem,
  activeKey,
  setActiveKey,
}: ListPoint): JSX.Element {
  const isActive = componentKey === activeKey;

  const clickHandler = () => {
    setActiveKey(isActive ? null : componentKey);
  };

  return (
    <>
      <li key={componentKey} className="list__point">
        <a href={pageItem.link} target="_self">
          <div
            className={`content ${isActive ? 'active' : ''}`}
            onClick={clickHandler}
          >
            {pageItem.name}
          </div>
        </a>
      </li>
    </>
  );
}

export default NavListPoint;
