import './AsideNavBar.css';

import Footer from '@components/Footer/Footer';
import NavListPoint from '@components/NavListPoint/NavListPoint';
import { LIST_ROWS } from '@constants/pages.ts';
import { setActiveKeyByLocation } from '@helpers/asideNavBarHelpers.ts';
import { RootState } from '@store/store';
import { JSX, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

function AsideNavBar(): JSX.Element {
  const [activeKey, setActiveKey] = useState<number | null>(null);
  const isOpen = useSelector((state: RootState) => state.menu.isOpen);
  const location = useLocation();

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('open');
    } else {
      document.body.classList.remove('open');
    }
  }, [isOpen]);

  useEffect(() => {
    setActiveKeyByLocation({
      location: location.pathname,
      setActiveKey: setActiveKey,
    });
  }, [location]);

  return (
    <>
      <aside className={`aside ${isOpen ? 'open' : ''}`}>
        <nav className={`aside__nav ${isOpen ? 'open' : ''}`}>
          <ul className="aside__ul__list">
            {LIST_ROWS.map((item, index) => (
              <NavListPoint
                key={index}
                componentKey={index}
                pageItem={item}
                activeKey={activeKey}
                setActiveKey={setActiveKey}
              />
            ))}
          </ul>
        </nav>
        <Footer />
      </aside>
    </>
  );
}

export default AsideNavBar;
