import './Table.css';

import Tbody from '@components/Table/Tbody/Tbody';
import Thead from '@components/Table/Thead/Thead';
import { Animal } from '@pages/Animals/Animals';
import { JSX } from 'react';

interface Column {
  name: string;
  type: string;
}

export interface TableProps {
  columns: Column[];
  data: Animal[];
}

function Table({ columns, data }: TableProps): JSX.Element {
  return (
    <table className="table">
      <thead className="thead">
        {/*TABLE HEAD*/}
        <Thead columns={columns} />
      </thead>
      <tbody className="tbody">
        {/*TABLE CONTENT*/}
        <Tbody columns={columns} data={data} />
      </tbody>
    </table>
  );
}

export default Table;
