import Tbody from '@components/Calendar/Tbody/Tbody.tsx';
import Thead from '@components/Calendar/Thead/Thead.tsx';
import { Feeding, TableColumn } from '@custom-types/feeding.ts';
import { JSX } from 'react';

export interface CalendarProps {
  columns: TableColumn[];
  data: Feeding[];
}

function Calendar({ columns, data }: CalendarProps): JSX.Element {
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

export default Calendar;
