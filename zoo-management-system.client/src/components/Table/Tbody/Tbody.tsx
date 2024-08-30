import './Tbody.css';

import { TableProps } from '@components/Table/Table';
import { JSX } from 'react';

function Tbody({ columns, data }: TableProps): JSX.Element {
  const getStatus = (status: string) => {
    switch (status) {
      case 'Выполнено':
        return <p className="cell__content select done">{status}</p>;
      case 'В процессе':
        return <p className="cell__content select in_work">{status}</p>;
      case 'Назначено':
        return <p className="cell__content select planned">{status}</p>;
    }
  };

  return (
    <>
      {data.map((entity) => (
        <tr key={entity.id}>
          {Object.entries(entity).map(([field, value], i) => (
            <td key={i} className="cell">
              {columns[i].name !== 'Статус' ? (
                <p className={`cell__content ${columns[i].type}`}>
                  {field === 'actions' ? <div className="delete"></div> : value}
                </p>
              ) : (
                getStatus(value)
              )}
            </td>
          ))}
        </tr>
      ))}
    </>
  );
}

export default Tbody;
