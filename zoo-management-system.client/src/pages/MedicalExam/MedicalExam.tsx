import AsideNavBar from '@components/AsideNavBar/AsideNavBar.tsx';
import Header from '@components/Header/Header.tsx';
import PrimaryButton from '@components/PrimaryButton/PrimaryButton.tsx';
import SearchBox from '@components/SearchBox/SearchBox.tsx';
import Table from '@components/Table/Table.tsx';
import { PAGE_TITLE } from '@constants/pages.ts';
import { PATH } from '@constants/paths.ts';
import { MEDICAL_EXAMINATION_COLUMNS } from '@constants/tables/medicalExamination.ts';
import { ADD } from '@constants/values.ts';
import { MedicalExamination } from '@custom-types/database/medicalExamination.ts';
import { RootState } from '@store/store.ts';
import { getExaminations } from '@utils/dbService.ts';
import { setCloseAnimation } from '@utils/setCloseAnimation.ts';
import { JSX, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function examinationsExam(): JSX.Element {
  const isOpen = useSelector((state: RootState) => state.menu.isOpen);
  const isClosing = useSelector((state: RootState) => state.menu.isClosing);
  const dispatch = useDispatch();
  const [examinations, setExaminations] = useState<MedicalExamination[]>([]);

  // Close animation effect
  useEffect(() => {
    setCloseAnimation({ isClosing, dispatch });
  }, [isClosing, dispatch]);

  // Get examinations information data effect
  useEffect(() => {
    const fetchExaminations = async () => {
      const data = await getExaminations();
      setExaminations(data);
    };
    fetchExaminations();
  }, []);

  const memoizedExaminations = useMemo(() => examinations, [examinations]);

  return (
    <>
      <AsideNavBar />
      <main className={`main ${isOpen && 'open'} ${isClosing && 'close'}`}>
        <Header pageTitle={PAGE_TITLE.MEDICAL_EXAMINATION}>
          <PrimaryButton
            name={ADD.ANIMAL}
            linkTo={PATH.TO_ADD_MODAL.medicalExamination}
          />
        </Header>
        <section className="section">
          <SearchBox />
          <div className="page__content table__content">
            <Table
              columns={MEDICAL_EXAMINATION_COLUMNS}
              data={memoizedExaminations}
            />
          </div>
        </section>
      </main>
    </>
  );
}

export default examinationsExam;