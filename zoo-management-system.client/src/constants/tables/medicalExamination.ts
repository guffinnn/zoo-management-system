import { Column } from '@custom-types/database/animal.ts';

export const MEDICAL_EXAMINATION_COLUMNS: Column[] = [
  { name: 'Животное', type: 'text' },
  { name: 'Дата проведения', type: 'date' },
  { name: 'Заключение', type: 'document' },
  { name: 'Действия', type: 'edit' },
];
