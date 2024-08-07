import './NavListPoint.css';

import { closeMenu } from '@store/menuSlice.ts';
import { RootState } from '@store/store.ts';
import { setCloseAnimation } from '@utils/setCloseAnimation.ts';
import { JSX } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
  const isClosing = useSelector((state: RootState) => state.menu.isClosing);
  const dispatch = useDispatch();

  const clickHandler = () => {
    // Set element isActive
    setActiveKey(isActive ? null : componentKey);
    // Close menu after that
    dispatch(closeMenu());
    setCloseAnimation({ isClosing, dispatch });
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
