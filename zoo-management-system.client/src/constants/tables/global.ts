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
      type: ElementType.label,
      id: '_species',
      htmlFor: 'species',
      children: 'Вид',
    },
    { type: ElementType.input, id: 'species', placeholder: 'Укажите вид' },
    {
      type: ElementType.select,
      id: 'gender',
      label: 'Пол:',
      options: [
        { value: 'null', text: 'Выберите пол', disabled: true },
        { value: 'male', text: 'Мужской' },
        { value: 'female', text: 'Женский' },
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
    // TODO: Add photo field
  ],
  workTime: [
    {
      type: ElementType.label,
      id: '_employee',
      htmlFor: 'employee',
      children: 'Сотрудник',
    },
    {
      type: ElementType.input,
      id: 'employee',
      placeholder: 'Выберите себя',
    },
    {
      type: ElementType.dateInput,
      id: 'date_of_work',
      label: 'Дата выполнения:',
      placeholder: 'Выберите дату',
    },
    {
      type: ElementType.select,
      id: 'type_of_work',
      label: 'Вид работы:',
      options: [
        {
          value: 'null',
          text: 'Выберите работу',
          disabled: true,
        },
        { value: 'feeding', text: 'Кормление' },
        { value: 'cleaning', text: 'Уборка' },
        { value: 'medical', text: 'Мед. осмотр' },
      ],
    },
    {
      type: ElementType.select,
      id: 'status',
      label: 'Статус:',
      options: [
        {
          value: 'done',
          text: 'Выполнено',
        },
        { value: 'in_work', text: 'В процессе' },
        { value: 'planned', text: 'Назначено' },
      ],
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
    employee_id: '',
    type_of_work: '',
    status: '',
    time: '',
    request: false,
  },
};

export type FormikFields = {
  [key: string]: string;
};
