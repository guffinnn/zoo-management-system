import { DB } from '@constants/values.ts';
import { DataType } from '@custom-types/dataType.ts';
import { addNotification } from '@store/notificationSlice.ts';
import { refreshData } from '@store/refreshSlice.ts';
import { deleteEntityByTableAndId } from '@utils/deleteService.ts';
import React from 'react';
import { Location } from 'react-router-dom';
import { Dispatch } from 'redux';

export const getStatus = (status: string) => {
  switch (status) {
    case 'Выполнено':
      return <p className="cell__content select done">{status}</p>;
    case 'В процессе':
      return <p className="cell__content select in_work">{status}</p>;
    case 'Назначено':
      return <p className="cell__content select planned">{status}</p>;
  }
};

const dataTypeMap: { [key: string]: DataType } = {
  animals: 'animal',
  worktime: 'workTime',
  medicalExamination: 'medicalExamination',
  employees: 'employees',
};

export const getDataType = (location: Location): DataType => {
  const dataType = location.pathname.split('/')[1];
  return dataTypeMap[dataType];
};

export const isNotEmpty = (value: string): boolean => value !== 'Пусто';

export const getClassNames = (type: string, value: string): string =>
  `cell__content ${type} ${isNotEmpty(value) && '--active'}`;

interface HandleDeleteProps {
  event: React.MouseEvent<HTMLDivElement>;
  dispatch: Dispatch;
  tableName: string;
  id: string;
}

export const handleDelete = async ({
  event,
  dispatch,
  tableName,
  id,
}: HandleDeleteProps): Promise<void> => {
  try {
    event.stopPropagation();

    await deleteEntityByTableAndId({ tableName, id });

    dispatch(addNotification(DB.SUCCESS_DELETION));
    dispatch(refreshData(id));
  } catch (error) {
    dispatch(addNotification(DB.FAIL_DELETION));
  }
};
