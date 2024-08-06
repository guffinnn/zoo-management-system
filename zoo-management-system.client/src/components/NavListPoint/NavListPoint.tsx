import './NavListPoint.css';

import { JSX } from 'react';
import { Link } from 'react-router-dom';

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
        <Link to={pageItem.link}>
          <div
            className={`content ${isActive ? 'active' : ''}`}
            onClick={clickHandler}
          >
            {pageItem.name}
          </div>
        </Link>
      </li>
    </>
  );
}

export default NavListPoint;
