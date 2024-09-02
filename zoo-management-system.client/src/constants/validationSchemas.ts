import { validationSchema as animalSchema } from '@constants/tables/animal.ts';
import { validationSchema as workTimeSchema } from '@constants/tables/workTime.ts';

export const validationSchemas = {
  animal: animalSchema,
  workTime: workTimeSchema,
};
