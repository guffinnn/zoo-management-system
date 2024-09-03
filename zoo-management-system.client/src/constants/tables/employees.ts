import { ERROR } from '@constants/values.ts';
import { Column } from '@custom-types/database/animal.ts';
import * as Yup from 'yup';

export const EMPLOYEES_TABLE_COLUMNS: Column[] = [
  { name: 'Фамилия', type: 'text' },
  { name: 'Имя', type: 'text' },
  { name: 'Отчество', type: 'text' },
  { name: 'Должность', type: 'text' },
  { name: 'Принят на работу', type: 'date' },
  { name: 'Заработная плата', type: 'number' },
  { name: 'Действия', type: 'edit' },
];

const currentDate = new Date();

export const validationSchema = Yup.object().shape({
  surname: Yup.string().required(ERROR.REQUIRED),
  name: Yup.string().required(ERROR.REQUIRED),
  middle_name: Yup.string().required(ERROR.REQUIRED),
  role: Yup.string().required(ERROR.REQUIRED),
  date_of_hire: Yup.date()
    .required(ERROR.REQUIRED)
    .max(currentDate, ERROR.DATE_TOO_LATE),
  salary: Yup.number().required(ERROR.REQUIRED).typeError(ERROR.NOT_A_NUMBER),
});
