import { Animal } from '@custom-types/database/animal.ts';
import { Feeding } from '@custom-types/database/feeding.ts';
import { WorkTime } from '@custom-types/database/workTime.ts';

export const ANIMALS: Animal[] = [
  {
    nickname: 'Лиля',
    species: 'Собака',
    date_of_birth: '01.02.1945',
    date_of_registration: '01.09.1980',
    medical_indicators: 'Не привит',
    photo: 'img.png',
    actions: '',
  },
  {
    nickname: 'Манки',
    species: 'Обезьяна',
    date_of_birth: '10.01.2020',
    date_of_registration: '29.05.2024',
    medical_indicators: 'Привит',
    photo: 'img.png',
    actions: '',
  },
];

export const FEEDING: Feeding[] = [
  { time: 7, animals: [2, 3, 6, 7] },
  { time: 8, animals: [1, 4, 5] },
  { time: 9, animals: [2] },
  { time: 10, animals: [] },
  { time: 11, animals: [2, 3] },
  { time: 12, animals: [1, 5] },
  { time: 13, animals: [2, 4, 7] },
  { time: 14, animals: [6] },
  { time: 15, animals: [2, 3] },
  { time: 16, animals: [1, 4] },
  { time: 17, animals: [5] },
  { time: 18, animals: [2, 3] },
  { time: 19, animals: [6] },
  { time: 20, animals: [7] },
  { time: 21, animals: [1, 4, 5] },
];

export const WORKTIME: WorkTime[] = [
  {
    employee: 'Иван Иванов',
    status: 'Выполнено',
    type_of_work: 'Кормление',
    time: 8,
    actions: '',
  },
  {
    employee: 'Иван Иванов',
    status: 'В процессе',
    type_of_work: 'Уборка',
    time: 1,
    actions: '',
  },
  {
    employee: 'Иван Иванов',
    status: 'Выполнено',
    type_of_work: 'Мед. осмотр',
    time: 6,
    actions: '',
  },
  {
    employee: 'Иван Иванов',
    status: 'Назначено',
    type_of_work: 'Уборка',
    time: 0,
    actions: '',
  },
];
