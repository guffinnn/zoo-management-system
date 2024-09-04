import { validationSchema as animalSchema } from '@constants/tables/animal.ts';
import { validationSchema as employeesSchema } from '@constants/tables/employees.ts';
import { validationSchema as medicalExamSchema } from '@constants/tables/medicalExamination.ts';
import { validationSchema as workTimeSchema } from '@constants/tables/workTime.ts';

export const validationSchemas = {
  animal: animalSchema,
  workTime: workTimeSchema,
  medicalExamination: medicalExamSchema,
  employees: employeesSchema,
};
