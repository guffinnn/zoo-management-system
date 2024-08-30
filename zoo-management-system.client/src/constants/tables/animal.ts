import { ERROR } from '@constants/values.ts';
import { Column } from '@custom-types/database/animal.ts';
import * as Yup from 'yup';

export const ANIMAL_TABLE_COLUMNS: Column[] = [
  { name: 'ID', type: 'string' },
  { name: 'Кличка', type: 'text' },
  { name: 'Вид', type: 'text' },
  { name: 'Пол', type: 'select' },
  { name: 'Дата рождения', type: 'date' },
  { name: 'Дата зачисления', type: 'date' },
  { name: 'Фото', type: 'eye' },
  { name: 'Действия', type: 'edit' },
];

export const validationSchema = Yup.object().shape({
  nickname: Yup.string().required(ERROR.REQUIRED),
  species: Yup.string().required(ERROR.REQUIRED),
  gender: Yup.string().required(ERROR.REQUIRED),
  date_of_birth: Yup.date()
    .required(ERROR.REQUIRED)
    .max(Yup.ref('date_of_registration'), ERROR.DATE_CONFLICT),
  date_of_registration: Yup.date().required(ERROR.REQUIRED),
});
