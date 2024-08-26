import AsideNavBar from '@components/AsideNavBar/AsideNavBar.tsx';
import Header from '@components/Header/Header.tsx';
import PrimaryButton from '@components/PrimaryButton/PrimaryButton.tsx';
import SearchBox from '@components/SearchBox/SearchBox.tsx';
import Table from '@components/Table/Table.tsx';
import { PAGE_TITLE } from '@constants/pages.ts';
import { PATH } from '@constants/paths.ts';
import { WORKTIME_TABLE_COLUMNS } from '@constants/tables/workTime.ts';
import { WORKTIME } from '@constants/testValues.ts';
import { ADD } from '@constants/values.ts';
import { RootState } from '@store/store.ts';
import { setCloseAnimation } from '@utils/setCloseAnimation.ts';
import { JSX, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function WorkTime(): JSX.Element {
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
        <Header pageTitle={PAGE_TITLE.WORKTIME}>
          <PrimaryButton name={ADD.WORKTIME} linkTo={PATH.TO_ADD_MODAL} />
        </Header>
        <section className="section">
          <SearchBox />
          <div className="page__content table__content">
            <Table columns={WORKTIME_TABLE_COLUMNS} data={WORKTIME} />
          </div>
        </section>
      </main>
    </>
  );
}

export default WorkTime;
