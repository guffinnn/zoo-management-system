import {
  getAnimals,
  getEmployees,
  getExaminations,
  getWorkTime,
} from '@utils/dbService.ts';

export const getMethods = {
  animal: getAnimals,
  workTime: getWorkTime,
  medicalExamination: getExaminations,
  employees: getEmployees,
};
