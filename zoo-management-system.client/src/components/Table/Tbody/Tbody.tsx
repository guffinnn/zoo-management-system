import './Tbody.css';

import { TableProps } from '@components/Table/Table';
import { JSX } from 'react';

function Tbody({ columns, data }: TableProps): JSX.Element {
  return (
    <>
      {data.map((animal, index) => (
        <tr key={index}>
          {Object.entries(animal).map(([field, value], i) => (
            <td key={i} className="cell">
              <p className={`cell__content ${columns[i].type}`}>
                {field === 'actions' ? <div className="delete"></div> : value}
              </p>
            </td>
          ))}
        </tr>
      ))}
    </>
  );
}

export default Tbody;
