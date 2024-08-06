import './AsideNavBar.css';

import Footer from '@components/Footer/Footer';
import NavListPoint from '@components/NavListPoint/NavListPoint';
import { LIST_ROWS } from '@constants/pages.ts';
import { RootState } from '@store/store';
import { JSX, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function AsideNavBar(): JSX.Element {
  const [activeKey, setActiveKey] = useState<number | null>(0);
  const isOpen = useSelector((state: RootState) => state.menu.isOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('open');
    } else {
      document.body.classList.remove('open');
    }
  }, [isOpen]);

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
