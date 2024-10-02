import { DB } from '@constants/values.ts';
import { addNotification } from '@store/notificationSlice.ts';
import React from 'react';
import { Dispatch } from 'redux';

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
