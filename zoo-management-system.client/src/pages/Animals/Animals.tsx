import './Animals.css';

import Header from '@components/Header/Header';
import PrimaryButton from '@components/PrimaryButton/PrimaryButton';
import SearchBox from '@components/SearchBox/SearchBox';
import Table from '@components/Table/Table';
import { JSX } from 'react';

interface Column {
  name: string;
  type: string;
}

const TABLE_COLUMNS: Column[] = [
  { name: 'Кличка', type: 'text' },
  { name: 'Вид', type: 'select' },
  { name: 'Дата рождения', type: 'date' },
  { name: 'Дата зачисления', type: 'date' },
  { name: 'Мед. показатели', type: 'document' },
  { name: 'Фото', type: 'eye' },
  { name: 'Действия', type: 'edit' },
];

export interface Animal {
  nickname: string;
  species: string;
  date_of_birth: string;
  date_of_registration: string;
  medical_indicators: string;
  photo: string;
  actions: string;
}

const ANIMALS: Animal[] = [
  {
    nickname: 'Лиля',
    species: 'Собака',
    date_of_birth: '01.02.1945',
    date_of_registration: '01.09.1980',
    medical_indicators: 'Не привит',
    photo: 'img.png',
    actions: '',
  },
  {
    nickname: 'Манки',
    species: 'Обезьяна',
    date_of_birth: '10.01.2020',
    date_of_registration: '29.05.2024',
    medical_indicators: 'Привит',
    photo: 'img.png',
    actions: '',
  },
];

function Animals(): JSX.Element {
  return (
    <>
      {/*HEADER COMPONENT*/}
      <Header pageTitle="Журнал учета животных">
        <PrimaryButton name={'Добавить животное'} linkTo={'#'} />
      </Header>
      {/*SECTION COMPONENT*/}
      <section className="section">
        {/*SEARCH BOX*/}
        <SearchBox />
        <div className="page__content table__content">
          {/*TABLE COMPONENT*/}
          <Table columns={TABLE_COLUMNS} data={ANIMALS} />
        </div>
      </section>
    </>
  );
}

export default Animals;
