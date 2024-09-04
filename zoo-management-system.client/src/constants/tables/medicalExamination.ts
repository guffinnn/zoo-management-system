import { DEFAULT_MIN_CHARACTERS, ERROR } from '@constants/values.ts';
import { Column } from '@custom-types/database/animal.ts';
import * as Yup from 'yup';

export const MEDICAL_EXAMINATION_COLUMNS: Column[] = [
  { name: 'Животное', type: 'text' },
  { name: 'Дата проведения', type: 'date' },
  { name: 'Заключение', type: 'document' },
  { name: 'Действия', type: 'edit' },
];

const currentDate = new Date();

export const validationSchema = Yup.object().shape({
  animal: Yup.string().required(ERROR.REQUIRED),
  date_of_examination: Yup.date()
    .required(ERROR.REQUIRED)
    .max(currentDate, ERROR.DATE_TOO_LATE),
  notes: Yup.string()
    .required(ERROR.REQUIRED)
    .min(DEFAULT_MIN_CHARACTERS, ERROR.NOTE_LENGTH_IS_LESS),
});
