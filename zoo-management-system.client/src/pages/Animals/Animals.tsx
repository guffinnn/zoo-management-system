import './Animals.css';

import Header from '@components/Header/Header';
import PrimaryButton from '@components/PrimaryButton/PrimaryButton';
import SearchBox from '@components/SearchBox/SearchBox';
import Table from '@components/Table/Table';
import { PAGE_TITLE } from '@constants/pages.ts';
import { ANIMAL_TABLE_COLUMNS } from '@constants/tables/animal.ts';
import { ANIMALS } from '@constants/testValues.ts';
import { ADD } from '@constants/values.ts';
import { JSX } from 'react';

function Animals(): JSX.Element {
  return (
    <>
      <Header pageTitle={PAGE_TITLE.ANIMALS}>
        <PrimaryButton name={ADD.ANIMAL} linkTo={'#'} />
      </Header>
      <section className="section">
        <SearchBox />
        <div className="page__content table__content">
          <Table columns={ANIMAL_TABLE_COLUMNS} data={ANIMALS} />
        </div>
      </section>
    </>
  );
}

export default Animals;
