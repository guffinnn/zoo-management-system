import { DB } from '@constants/values.ts';
import { DataType } from '@custom-types/dataType.ts';
import { addNotification } from '@store/notificationSlice.ts';
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

export const handleDeleteAnimal = (
  event: React.MouseEvent<HTMLDivElement>,
  dispatch: Dispatch,
): void => {
  try {
    event.stopPropagation();
    // TODO: Add delete functionality
    dispatch(addNotification(DB.SUCCESS_DELETION));
  } catch (error) {
    dispatch(addNotification(DB.FAIL_DELETION));
  }
};
