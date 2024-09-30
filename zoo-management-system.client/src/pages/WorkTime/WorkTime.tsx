import AsideNavBar from '@components/AsideNavBar/AsideNavBar.tsx';
import Header from '@components/Header/Header.tsx';
import PrimaryButton from '@components/PrimaryButton/PrimaryButton.tsx';
import SearchBox from '@components/SearchBox/SearchBox.tsx';
import Table from '@components/Table/Table.tsx';
import StyledToastContainer from '@components/ToastContainer/ToastContainer.tsx';
import { PAGE_TITLE } from '@constants/pages.ts';
import { PATH } from '@constants/paths.ts';
import { WORKTIME_TABLE_COLUMNS } from '@constants/tables/workTime.ts';
import { ADD } from '@constants/values.ts';
import { WorkTime as WorkTimeType } from '@custom-types/database/workTime.ts';
import { RootState } from '@store/store.ts';
import { getWorkTime } from '@utils/dbService.ts';
import { setCloseAnimation } from '@utils/setCloseAnimation.ts';
import { JSX, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function WorkTime(): JSX.Element {
  const isOpen = useSelector((state: RootState) => state.menu.isOpen);
  const isClosing = useSelector((state: RootState) => state.menu.isClosing);
  const dispatch = useDispatch();
  const [workTime, setWorkTime] = useState<WorkTimeType[]>([]);

  // Close animation effect
  useEffect(() => {
    setCloseAnimation({ isClosing, dispatch });
  }, [isClosing, dispatch]);

  // Get workTime data effect
  useEffect(() => {
    const fetchWorkTime = async () => {
      const data = await getWorkTime();
      setWorkTime(data);
    };
    fetchWorkTime();
  }, []);

  const memoizedWorkTime = useMemo(() => workTime, [workTime]);

  return (
    <>
      <AsideNavBar />
      <main className={`main ${isOpen && 'open'} ${isClosing && 'close'}`}>
        <Header pageTitle={PAGE_TITLE.WORKTIME}>
          <PrimaryButton
            name={ADD.WORKTIME}
            linkTo={PATH.TO_ADD_MODAL.workTime}
          />
        </Header>
        <section className="section">
          <SearchBox<WorkTimeType>
            typeOfData="workTime"
            setData={setWorkTime}
          />
          <div className="page__content table__content">
            <Table columns={WORKTIME_TABLE_COLUMNS} data={memoizedWorkTime} />
          </div>
        </section>
        <StyledToastContainer />
      </main>
    </>
  );
}

export default WorkTime;
