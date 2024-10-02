import './Tbody.css';

import ImageOverlay from '@components/ImageOverlay/ImageOverlay.tsx';
import { TableProps } from '@components/Table/Table';
import { PATH } from '@constants/paths.ts';
import { DataType, EntityData } from '@custom-types/dataType.ts';
import {
  getClassNames,
  handleDeleteAnimal,
  isNotEmpty,
} from '@helpers/tbodyHelpers.ts';
import { getDataType, getStatus } from '@helpers/tbodyHelpers.tsx';
import { JSX } from 'react';
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

  return (
    <>
      {data.map((entity) => (
        <tr key={entity.id} onClick={() => handleEditClick(entity)}>
          {Object.entries(entity).map(
            ([field, value], i) =>
              field !== 'id' && (
                <td key={i} className="cell">
                  {columns[i]?.name !== 'Статус' ? (
                    <p className={getClassNames(columns[i]?.type, value)}>
                      {field === 'actions' ? (
                        <div
                          className="delete"
                          onClick={(e) => handleDeleteAnimal(e, dispatch)}
                        ></div>
                      ) : field === 'photo' && isNotEmpty(value) ? (
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
