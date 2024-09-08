import './Animals.css';

import AsideNavBar from '@components/AsideNavBar/AsideNavBar.tsx';
import Header from '@components/Header/Header';
import PrimaryButton from '@components/PrimaryButton/PrimaryButton';
import SearchBox from '@components/SearchBox/SearchBox';
import Table from '@components/Table/Table';
import { PAGE_TITLE } from '@constants/pages.ts';
import { PATH } from '@constants/paths.ts';
import { ANIMAL_TABLE_COLUMNS } from '@constants/tables/animal.ts';
import { ADD } from '@constants/values.ts';
import { Animal } from '@custom-types/database/animal.ts';
import { RootState } from '@store/store.ts';
import { getAnimals } from '@utils/dbService.ts';
import { setCloseAnimation } from '@utils/setCloseAnimation.ts';
import { JSX, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Animals(): JSX.Element {
  const isOpen = useSelector((state: RootState) => state.menu.isOpen);
  const isClosing = useSelector((state: RootState) => state.menu.isClosing);
  const dispatch = useDispatch();
  const [animals, setAnimals] = useState<Animal[]>([]);

  // Close animation effect
  useEffect(() => {
    setCloseAnimation({ isClosing, dispatch });
  }, [isClosing, dispatch]);

  // Get animals data effect
  useEffect(() => {
    const fetchAnimals = async () => {
      const data = await getAnimals();
      setAnimals(data);
    };
    fetchAnimals();
  }, []);

  const memoizedAnimals = useMemo(() => animals, [animals]);

  return (
    <>
      <AsideNavBar />
      <main className={`main ${isOpen && 'open'} ${isClosing && 'close'}`}>
        <Header pageTitle={PAGE_TITLE.ANIMALS}>
          <PrimaryButton name={ADD.ANIMAL} linkTo={PATH.TO_ADD_MODAL.animal} />
        </Header>
        <section className="section">
          <SearchBox<Animal> typeOfData="animal" setData={setAnimals} />
          <div className="page__content table__content">
            <Table columns={ANIMAL_TABLE_COLUMNS} data={memoizedAnimals} />
          </div>
        </section>
      </main>
    </>
  );
}

export default Animals;
