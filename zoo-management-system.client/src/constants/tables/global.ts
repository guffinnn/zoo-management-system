import {
  ElementType,
  ElementVariant,
} from '@pages/Modal/modals/elements/types.ts';

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
      options: [
        { value: 'null', text: 'Выберите вид' },
        { value: 'dog', text: 'Собака' },
      ],
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

export const initialValues = {
  animal: {
    nickname: '',
    aviary: '',
    date_of_birth: '',
    date_of_registration: '',
    medical_indicators: '',
  },
  workTime: {
    employee: '',
    type_of_work: '',
    status: '',
    time: '',
    request: false,
  },
};

export type FormikFields = {
  [key: string]: string;
};
