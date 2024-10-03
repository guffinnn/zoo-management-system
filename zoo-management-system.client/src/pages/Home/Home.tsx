import './Home.css';

import gibbon from '@assets/gibbon.jpeg';
import medicine from '@assets/medicine.jpeg';
import employee from '@assets/zookeeper.jpeg';
import AsideNavBar from '@components/AsideNavBar/AsideNavBar.tsx';
import Card from '@components/Card/Card';
import Header from '@components/Header/Header';
import { PAGE_TITLE } from '@constants/pages.ts';
import { PATH } from '@constants/paths.ts';
import { RootState } from '@store/store.ts';
import { setCloseAnimation } from '@utils/setCloseAnimation.ts';
import { JSX, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Home(): JSX.Element {
  const isOpen = useSelector((state: RootState) => state.menu.isOpen);
  const isClosing = useSelector((state: RootState) => state.menu.isClosing);
  const dispatch = useDispatch();
  const isAdmin = useSelector((state: RootState) => state.user.user?.is_admin);

  useEffect(() => {
    setCloseAnimation({ isClosing, dispatch });
  }, [isClosing, dispatch]);

  return (
    <>
      <AsideNavBar />
      <main className={`main ${isOpen && 'open'} ${isClosing && 'close'}`}>
        <Header pageTitle={PAGE_TITLE.HOME} />
        <section className="section">
          <div className="cards">
            <div className="cards__fluid">
              <Card
                link={PATH.TO_ANIMALS}
                maskColor="green"
                info="Животные"
                imgSrc={gibbon}
                imgAlt="Перейти"
              />
              {isAdmin ? (
                <Card
                  link={PATH.TO_EMPLOYEES}
                  maskColor="orange"
                  info="Сотрудники"
                  imgSrc={employee}
                  imgAlt="Перейти"
                />
              ) : (
                <Card
                  link={PATH.TO_WORKTIME}
                  maskColor="orange"
                  info="Работа"
                  imgSrc={employee}
                  imgAlt="Перейти"
                />
              )}
              <Card
                link={PATH.TO_EXAMINATION}
                maskColor="blue"
                info="Здоровье"
                imgSrc={medicine}
                imgAlt="Перейти"
              />
            </div>
          </div>
          <div className="page__content">
            <p className="div__p__content">Содержимое страницы</p>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
