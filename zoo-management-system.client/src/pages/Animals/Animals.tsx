import './Animals.css';

import AsideNavBar from '@components/AsideNavBar/AsideNavBar.tsx';
import Header from '@components/Header/Header';
import PrimaryButton from '@components/PrimaryButton/PrimaryButton';
import SearchBox from '@components/SearchBox/SearchBox';
import Table from '@components/Table/Table';
import { PAGE_TITLE } from '@constants/pages.ts';
import { PATH } from '@constants/paths.ts';
import { ANIMAL_TABLE_COLUMNS } from '@constants/tables/animal.ts';
import { ANIMALS } from '@constants/testValues.ts';
import { ADD } from '@constants/values.ts';
import { RootState } from '@store/store.ts';
import { setCloseAnimation } from '@utils/setCloseAnimation.ts';
import { JSX, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Animals(): JSX.Element {
  const isOpen = useSelector((state: RootState) => state.menu.isOpen);
  const isClosing = useSelector((state: RootState) => state.menu.isClosing);
  const dispatch = useDispatch();

  useEffect(() => {
    setCloseAnimation({ isClosing, dispatch });
  }, [isClosing, dispatch]);

  return (
    <>
      <AsideNavBar />
      <main className={`main ${isOpen && 'open'} ${isClosing && 'close'}`}>
        <Header pageTitle={PAGE_TITLE.ANIMALS}>
          <PrimaryButton name={ADD.ANIMAL} linkTo={PATH.TO_ADD_MODAL} />
        </Header>
        <section className="section">
          <SearchBox />
          <div className="page__content table__content">
            <Table columns={ANIMAL_TABLE_COLUMNS} data={ANIMALS} />
          </div>
        </section>
      </main>
    </>
  );
}

export default Animals;
