import { ERROR } from '@constants/values.ts';
import { Column } from '@custom-types/database/animal.ts';
import { ElementType, ElementVariant } from '@pages/Modal/modals/elements/types.ts';
import * as Yup from 'yup';

export const ANIMAL_TABLE_COLUMNS: Column[] = [
  { name: 'Кличка', type: 'text' },
  { name: 'Вид', type: 'select' },
  { name: 'Дата рождения', type: 'date' },
  { name: 'Дата зачисления', type: 'date' },
  { name: 'Мед. показатели', type: 'document' },
  { name: 'Фото', type: 'eye' },
  { name: 'Действия', type: 'edit' },
];

export const validationSchema = Yup.object().shape({
  nickname: Yup.string().required(ERROR.REQUIRED),
  aviary: Yup.string().required(ERROR.REQUIRED),
  date_of_birth: Yup.date()
    .required(ERROR.REQUIRED)
    .max(Yup.ref('date_of_registration'), ERROR.DATE_CONFLICT),
  date_of_registration: Yup.date().required(ERROR.REQUIRED),
  medical_indicators: Yup.string().required(ERROR.REQUIRED),
});

export const fieldConfig: Record<string, ElementVariant[]> = {
  animal: [
    {
      type: ElementType.label,
      id: '_nickname',
      htmlFor: 'nickname',
      children: 'Кличка',
    },
    { type: ElementType.input, id: 'nickname', placeholder: 'Введите кличку' },
    {
      type: ElementType.select,
      id: 'aviary',
      label: 'Вид:',
      options: [{ value: 'null', text: 'Выберите вид' }],
    },
    {
      type: ElementType.dateInput,
      id: 'date_of_birth',
      label: 'Дата рождения:',
      placeholder: 'Выберите дату',
    },
    {
      type: ElementType.dateInput,
      id: 'date_of_registration',
      label: 'Дата зачисления:',
      placeholder: 'Выберите дату',
    },
    {
      type: ElementType.label,
      id: '_medical_indicators',
      htmlFor: 'medical_indicators',
      children: 'Мед. показания',
    },
    {
      type: ElementType.textArea,
      id: 'medical_indicators',
      placeholder: 'Опишите мед. обследования',
    },
  ],
  workTime: [
    {
      type: ElementType.label,
      id: '_employee',
      htmlFor: 'employee',
      children: 'Сотрудник',
    },
    { type: ElementType.input, id: 'employee', placeholder: 'Выберите себя' },
    {
      type: ElementType.select,
      id: 'type_of_work',
      label: 'Вид работы:',
      options: [{ value: 'null', text: 'Выберите работу' }],
    },
    {
      type: ElementType.select,
      id: 'status',
      label: 'Статус:',
      options: [{ value: 'null', text: 'Выполнено' }],
    },
    {
      type: ElementType.label,
      id: '_time',
      htmlFor: 'time',
      children: 'Время, ч.',
    },
    { type: ElementType.input, id: 'time', placeholder: 'Укажите время' },
    {
      type: ElementType.checkbox,
      id: 'request',
      children: 'Запросить подтверждение работы',
    },
  ],
};
