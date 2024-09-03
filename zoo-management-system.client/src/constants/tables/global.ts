import { Animal } from '@custom-types/database/animal.ts';
import { WorkTime } from '@custom-types/database/workTime.ts';
import {
  ElementType,
  ElementVariant,
} from '@pages/Modal/modals/elements/types.ts';
import { Employee } from '@custom-types/database/employee.ts';

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
  employees: [
    {
      type: ElementType.label,
      id: '_surname',
      htmlFor: 'surname',
      children: 'Фамилия',
    },
    {
      type: ElementType.input,
      id: 'surname',
      placeholder: 'Введите фамилию',
    },
    {
      type: ElementType.label,
      id: '_name',
      htmlFor: 'name',
      children: 'Имя',
    },
    {
      type: ElementType.input,
      id: 'name',
      placeholder: 'Введите имя',
    },
    {
      type: ElementType.label,
      id: '_middle_name',
      htmlFor: 'middle_name',
      children: 'Отчество',
    },
    {
      type: ElementType.input,
      id: 'middle_name',
      placeholder: 'Введите отчество',
    },
    {
      type: ElementType.label,
      id: '_role',
      htmlFor: 'role',
      children: 'Должность',
    },
    {
      type: ElementType.input,
      id: 'role',
      placeholder: 'Укажите должность',
    },
    {
      type: ElementType.dateInput,
      id: 'date_of_hire',
      label: 'Принят на работу:',
      placeholder: 'Выберите дату',
    },
    {
      type: ElementType.label,
      id: '_salary',
      htmlFor: 'salary',
      children: 'Заработная плата',
    },
    {
      type: ElementType.input,
      id: 'salary',
      placeholder: 'Укажите з/п',
    },
  ],
};

export const initialValues: Record<string, Animal | WorkTime | Employee> = {
  animal: {
    nickname: '',
    species: '',
    gender: '',
    date_of_birth: '',
    date_of_registration: '',
  },
  workTime: {
    employee: '',
    date_of_work: '',
    type_of_work: '',
    status: '',
    time: 0,
    request: false,
  },
  employees: {
    name: '',
    surname: '',
    middle_name: '',
    role: '',
    salary: 0,
    date_of_hire: '',
  },
};

export type FormikFields = {
  [key: string]: string;
};
