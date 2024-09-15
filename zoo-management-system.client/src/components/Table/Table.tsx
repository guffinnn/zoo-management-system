import './Table.css';

import { Loader } from '@components/Table/styled.ts';
import Tbody from '@components/Table/Tbody/Tbody';
import Thead from '@components/Table/Thead/Thead';
import { Column } from '@custom-types/database/animal.ts';
import { TableData } from '@custom-types/dataType.ts';
import { JSX } from 'react';

export interface TableProps {
  columns: Column[];
  data: TableData;
}

function Table({ columns, data }: TableProps): JSX.Element {
  return (
    <>
      {data && data.length > 0 ? (
        <table className="table">
          <thead className="thead">
            <Thead columns={columns} />
          </thead>
          <tbody className="tbody">
            <Tbody columns={columns} data={data} />
          </tbody>
        </table>
      ) : (
        <Loader>Загрузка...</Loader>
      )}
    </>
  );
}

export default Table;
