import { CalendarProps } from '@components/Calendar/Calendar.tsx';
import {
  CellContent,
  HeadCellContent,
  Theading,
  TimeCellContent,
} from '@components/Calendar/Thead/styled.ts';
import { JSX } from 'react';

function Thead({ columns }: Pick<CalendarProps, 'columns'>): JSX.Element {
  return (
    <tr>
      {columns.map((item, index) => (
        <Theading
          key={index}
          className={typeof item === 'object' ? 'head__cell' : 'time'}
        >
          {typeof item === 'object' ? (
            <div className="head__cell__container">
              <HeadCellContent>№{item.number}</HeadCellContent>
              <CellContent>{item.animals}</CellContent>
            </div>
          ) : (
            <TimeCellContent>{item}</TimeCellContent>
          )}
        </Theading>
      ))}
    </tr>
  );
}

export default Thead;
