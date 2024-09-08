import { PAGE_TITLE } from '@constants/pages.ts';

export const PAGE_FIELDS = {
  [`${PAGE_TITLE.ANIMALS}`]: [
    'Кличка',
    'Вид',
    'Пол',
    'Дата рождения',
    'Дата зачисления',
  ],
  [`${PAGE_TITLE.WORKTIME}`]: [
    'Дата выполнения',
    'Вид работы',
    'Статус',
    'Время, ч.',
  ],
  [`${PAGE_TITLE.MEDICAL_EXAMINATION}`]: [
    /*'Кличка',
    'Вид',*/
    'Дата проведения',
    'Заключение',
  ],
  [`${PAGE_TITLE.EMPLOYEES}`]: [
    'Фамилия',
    'Имя',
    'Отчество',
    'Должность',
    'Принят на работу',
    'Заработная плата',
  ],
};
