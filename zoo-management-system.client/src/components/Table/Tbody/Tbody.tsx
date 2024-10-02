import './Tbody.css';

import ImageOverlay from '@components/ImageOverlay/ImageOverlay.tsx';
import { TableProps } from '@components/Table/Table';
import { PATH } from '@constants/paths.ts';
import { DB } from '@constants/values.ts';
import { DataType, EntityData } from '@custom-types/dataType.ts';
import { getDataType, getStatus } from '@helpers/tbodyHelpers.tsx';
import { addNotification } from '@store/notificationSlice.ts';
import React, { JSX } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

function Tbody({ columns, data }: TableProps): JSX.Element {
  const navigate = useNavigate();
  const location = useLocation();
  const dataType: DataType = getDataType(location);
  const dispatch = useDispatch();

  const handleEditClick = (entity: EntityData) => {
    const editPath = PATH.TO_EDIT_MODAL[dataType].replace(':id', entity?.id);
    navigate(editPath);
  };

  const handleDeleteAnimal = (event: React.MouseEvent<HTMLDivElement>) => {
    try {
      event.stopPropagation();
      // TODO: Add delete functionality
      dispatch(addNotification(DB.SUCCESS_DELETION));
    } catch (error) {
      dispatch(addNotification(DB.FAIL_DELETION));
    }
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
                    <p
                      className={`cell__content ${columns[i]?.type} ${value !== 'Пусто' && '--active'}`}
                    >
                      {field === 'actions' ? (
                        <div
                          className="delete"
                          onClick={(e) => handleDeleteAnimal(e)}
                        ></div>
                      ) : field === 'photo' && value !== 'Пусто' ? (
                        <ImageOverlay value={value}>
                          <div className="frame">{'Фото'}</div>
                        </ImageOverlay>
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
