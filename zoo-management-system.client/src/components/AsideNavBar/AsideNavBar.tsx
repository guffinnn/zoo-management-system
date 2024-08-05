import './AsideNavBar.css';

import Footer from '@components/Footer/Footer';
import NavListPoint from '@components/NavListPoint/NavListPoint';
import { RootState } from '@store/store';
import { JSX, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

interface ListRow {
  name: string;
  link: string;
}

const LIST_ROWS: ListRow[] = [
  { name: 'Главная', link: '/' },
  { name: 'Животные', link: 'animals' },
  { name: 'Рабочее время', link: '#' },
  { name: 'Мед. обследования', link: '#' },
  { name: 'Кормление', link: '#' },
  { name: 'Уборка', link: '#' },
  { name: 'Сотрудники', link: '#' },
];

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
      {/*ASIDE COMPONENT*/}
      <aside className={`aside ${isOpen ? 'open' : ''}`}>
        <nav className={`aside__nav ${isOpen ? 'open' : ''}`}>
          <ul className="aside__ul__list">
            {/*NAV_LIST_POINT COMPONENT*/}
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
        {/*FOOTER COMPONENT*/}
        <Footer />
      </aside>
    </>
  );
}

export default AsideNavBar;
