import { Animal } from '@custom-types/database/animal.ts';
import { Employee } from '@custom-types/database/employee.ts';
import { MedicalExamination } from '@custom-types/database/medicalExamination.ts';
import { WorkTime } from '@custom-types/database/workTime.ts';
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
        { value: 'Мужской', text: 'Муж.' },
        { value: 'Женский', text: 'Жен.' },
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
        { value: 'ORjVQCC0OCEdYwpo9CL7', text: 'Кормление' },
        { value: 'c93uPbZhe7jpfmJLoG0g', text: 'Уборка' },
        { value: 'IXB5qoXYF4oiLBSHD638', text: 'Мед. осмотр' },
      ],
    },
    {
      type: ElementType.select,
      id: 'status',
      label: 'Статус:',
      options: [
        {
          value: 'Выполнено',
          text: 'Выполнено',
        },
        { value: 'В процессе', text: 'В процессе' },
        { value: 'Назначено', text: 'Назначено' },
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
  medicalExamination: [
    {
      type: ElementType.select,
      id: 'animal',
      label: 'Животное:',
      options: [
        { value: 'null', text: 'Выберите животное', disabled: true },
        { value: 'GEQCQ4MLfmX3MPpTejhr', text: 'Бася, Обезьяна' },
        { value: 'fvvr3ItuOFUxIYd4CWxu', text: 'Феня, Лама' },
        { value: 'QyfAY6kcqocTV0hG9GR5', text: 'Роза, Попугай' },
        { value: 'nmi7bu5aWrp5T7daaRE1', text: 'Шершуля, Медведь' },
        { value: 'yz8FHMqFtngCrL5ma2xF', text: 'Лео, Обезьяна' },
        { value: '3Ccp8qdujnoRbHabjhLa', text: 'Мила, Тигрица' },
        { value: 'euZQz6eChktDiGFaSfJq', text: 'Лиля, Собака' },
        { value: 'W6FtzZGgkz6CQCrwxqsS', text: 'Тим, Горный козел' },
      ],
    },
    {
      type: ElementType.dateInput,
      id: 'date_of_examination',
      label: 'Дата проведения:',
      placeholder: 'Выберите дату',
    },
    {
      type: ElementType.label,
      id: '_notes',
      htmlFor: 'notes',
      children: 'Заключение',
    },
    {
      type: ElementType.textArea,
      id: 'notes',
      placeholder: `В заключении нужно выделить:\n1. Цель или причину обследования\n2. Заключение о состоянии здоровья`,
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

export const initialValues: Record<
  string,
  Animal | WorkTime | Employee | MedicalExamination
> = {
  animal: {
    nickname: '',
    species: '',
    gender: '',
    date_of_birth: '',
    date_of_registration: '',
    id: '',
  },
  workTime: {
    employee: '',
    date_of_work: '',
    type_of_work: '',
    status: '',
    time: 0,
    request: false,
    id: '',
  },
  medicalExamination: {
    animal: '',
    date_of_examination: '',
    notes: '',
    id: '',
  },
  employees: {
    name: '',
    surname: '',
    middle_name: '',
    role: '',
    salary: 0,
    date_of_hire: '',
    id: '',
  },
};

export type FormikFields = {
  [key: string]: string;
};
