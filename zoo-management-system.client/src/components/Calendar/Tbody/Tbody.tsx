import { CalendarProps } from '@components/Calendar/Calendar.tsx';
import {
  CalendarEvent,
  Tdescription,
} from '@components/Calendar/Tbody/styled.ts';
import { JSX } from 'react';

function Tbody({ columns, data }: CalendarProps): JSX.Element {
  return (
    <>
      {data.map((feedingItem, rowIndex) => (
        <tr key={rowIndex}>
          {columns.map((column, colIndex) => (
            <Tdescription
              key={colIndex}
              className={colIndex === 0 ? 'time' : 'cell'}
            >
              {typeof column === 'string'
                ? `${feedingItem.time}:00`
                : column?.number &&
                  feedingItem.animals.includes(column?.number) && (
                    <CalendarEvent>{feedingItem.time}:00</CalendarEvent>
                  )}
            </Tdescription>
          ))}
        </tr>
      ))}
    </>
  );
}

export default Tbody;
