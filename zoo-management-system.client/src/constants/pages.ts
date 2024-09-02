import { PATH } from '@constants/paths.ts';
import { ListRow } from '@custom-types/listRow.ts';

export const PAGE_TITLE = {
  HOME: 'Главная страница',
  ANIMALS: 'Журнал учета животных',
  FEEDING: 'График кормления животных',
  WORKTIME: 'Журнал учета рабочего времени',
  MEDICAL_EXAMINATION: 'Журнал медицинских обследований',
};

export const LIST_ROWS: ListRow[] = [
  { name: 'Главная', link: PATH.TO_HOME },
  { name: 'Животные', link: PATH.TO_ANIMALS },
  { name: 'Рабочее время', link: PATH.TO_WORKTIME },
  { name: 'Мед. обследования', link: PATH.TO_EXAMINATION },
  { name: 'Кормление', link: PATH.TO_FEEDING },
  { name: 'Уборка', link: '#' },
  { name: 'Сотрудники', link: '#' },
];
