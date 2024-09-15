import './Tbody.css';

import { TableProps } from '@components/Table/Table';
import { PATH } from '@constants/paths.ts';
import { DataType, EntityData } from '@custom-types/dataType.ts';
import { getDataType, getStatus } from '@helpers/tbodyHelpers.tsx';
import { JSX } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Tbody({ columns, data }: TableProps): JSX.Element {
  const navigate = useNavigate();
  const location = useLocation();
  const dataType: DataType = getDataType(location);

  const handleEditClick = (entity: EntityData) => {
    const editPath = PATH.TO_EDIT_MODAL[dataType].replace(':id', entity?.id);
    navigate(editPath);
  };

  return (
    <>
      {data.map((entity) => (
        <tr key={entity.id} onClick={() => handleEditClick(entity)}>
          {Object.entries(entity).map(
            ([field, value], i) =>
              field !== 'id' && (
                <td key={i} className="cell">
                  {columns[i]?.name !== 'Статус' ? (
                    <p className={`cell__content ${columns[i]?.type}`}>
                      {field === 'actions' ? (
                        <div className="delete"></div>
                      ) : (
                        value
                      )}
                    </p>
                  ) : (
                    getStatus(value)
                  )}
                </td>
              ),
          )}
        </tr>
      ))}
    </>
  );
}

export default Tbody;
