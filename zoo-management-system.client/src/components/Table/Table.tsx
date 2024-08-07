import './Table.css';

import Tbody from '@components/Table/Tbody/Tbody';
import Thead from '@components/Table/Thead/Thead';
import { Animal, Column } from '@custom-types/database/animal.ts';
import { JSX } from 'react';

export interface TableProps {
  columns: Column[];
  data: Animal[];
}

function Table({ columns, data }: TableProps): JSX.Element {
  return (
    <table className="table">
      <thead className="thead">
        <Thead columns={columns} />
      </thead>
      <tbody className="tbody">
        <Tbody columns={columns} data={data} />
      </tbody>
    </table>
  );
}

export default Table;
