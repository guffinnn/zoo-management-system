import { PATH } from '@constants/paths.ts';
import { ListRow } from '@custom-types/listRow.ts';

export const PAGE_TITLE = {
  HOME: 'Главная страница',
  ANIMALS: 'Журнал учета животных',
  FEEDING: 'График кормления животных',
};

export const LIST_ROWS: ListRow[] = [
  { name: 'Главная', link: PATH.TO_HOME },
  { name: 'Животные', link: PATH.TO_ANIMALS },
  { name: 'Рабочее время', link: '#' },
  { name: 'Мед. обследования', link: '#' },
  { name: 'Кормление', link: PATH.TO_FEEDING },
  { name: 'Уборка', link: '#' },
  { name: 'Сотрудники', link: '#' },
];