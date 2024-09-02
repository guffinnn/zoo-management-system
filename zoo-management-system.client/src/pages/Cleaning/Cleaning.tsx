import AsideNavBar from '@components/AsideNavBar/AsideNavBar.tsx';
import Calendar from '@components/Calendar/Calendar.tsx';
import {
  Button,
  ButtonGroup,
  CalendarHeaderLayout,
  TodayInfo,
} from '@components/Calendar/styled.ts';
import Header from '@components/Header/Header.tsx';
import { PAGE_TITLE } from '@constants/pages.ts';
import { CLEANING_TABLE_COLUMNS } from '@constants/tables/cleaning.ts';
import { CLEANING } from '@constants/testValues.ts';
import { RootState } from '@store/store.ts';
import { getCurrentDate } from '@utils/getCurrentDate.ts';
import { setCloseAnimation } from '@utils/setCloseAnimation.ts';
import { JSX, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Cleaning(): JSX.Element {
  const isOpen = useSelector((state: RootState) => state.menu.isOpen);
  const isClosing = useSelector((state: RootState) => state.menu.isClosing);
  const dispatch = useDispatch();

  useEffect(() => {
    setCloseAnimation({ isClosing, dispatch });
  }, [isClosing, dispatch]);

  const currentDate = getCurrentDate();

  return (
    <>
      <AsideNavBar />
      <main className={`main ${isOpen && 'open'} ${isClosing && 'close'}`}>
        <Header pageTitle={PAGE_TITLE.CLEANING} />
        <section className="section">
          <CalendarHeaderLayout>
            <TodayInfo>{currentDate}</TodayInfo>
            <ButtonGroup>
              <Button>Вчера</Button>
              <Button className={'--primary'}>Сегодня</Button>
              <Button>Завтра</Button>
            </ButtonGroup>
          </CalendarHeaderLayout>
          <div className="page__content table__content">
            <Calendar columns={CLEANING_TABLE_COLUMNS} data={CLEANING} />
          </div>
        </section>
      </main>
    </>
  );
}

export default Cleaning;
