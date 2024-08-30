import { Animal } from '@custom-types/database/animal.ts';
import { Feeding } from '@custom-types/database/feeding.ts';
import { WorkTime } from '@custom-types/database/workTime.ts';

export const ANIMALS: Animal[] = [
  {
    id: '1',
    nickname: 'Лиля',
    species: 'Собака',
    gender: 'Женский',
    date_of_birth: '01.02.1945',
    date_of_registration: '01.09.1980',
    photo: 'img.png',
    actions: '',
  },
  {
    id: '2',
    nickname: 'Манки',
    species: 'Обезьяна',
    gender: 'Мужской',
    date_of_birth: '10.01.2020',
    date_of_registration: '29.05.2024',
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
    id: '1',
    employee: 'Иван Иванов',
    date_of_work: '2024-02-02',
    type_of_work: 'Кормление',
    status: 'Выполнено',
    time: 8,
    actions: '',
  },
  {
    id: '2',
    employee: 'Иван Иванов',
    date_of_work: '2024-02-02',
    type_of_work: 'Уборка',
    status: 'В процессе',
    time: 1,
    actions: '',
  },
  {
    id: '3',
    employee: 'Иван Иванов',
    date_of_work: '2024-02-02',
    type_of_work: 'Мед. осмотр',
    status: 'Выполнено',
    time: 6,
    actions: '',
  },
  {
    id: '4',
    employee: 'Иван Иванов',
    date_of_work: '2024-02-02',
    type_of_work: 'Уборка',
    status: 'Назначено',
    time: 0,
    actions: '',
  },
];
