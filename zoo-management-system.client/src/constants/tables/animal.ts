import { Column } from '@custom-types/database/animal.ts';

export const ANIMAL_TABLE_COLUMNS: Column[] = [
  { name: 'Кличка', type: 'text' },
  { name: 'Вид', type: 'select' },
  { name: 'Дата рождения', type: 'date' },
  { name: 'Дата зачисления', type: 'date' },
  { name: 'Мед. показатели', type: 'document' },
  { name: 'Фото', type: 'eye' },
  { name: 'Действия', type: 'edit' },
];
