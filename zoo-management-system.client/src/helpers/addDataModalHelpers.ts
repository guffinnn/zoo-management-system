import { DataType, EntityData } from '@custom-types/dataType.ts';
import {
  getAnimalById,
  getEmployeeById,
  getExaminationById,
  getWorkTimeById,
} from '@utils/dbService.ts';

export const dataFetchers: {
  [key in DataType]: (id: string) => Promise<EntityData | null>;
} = {
  animal: getAnimalById,
  workTime: getWorkTimeById,
  medicalExamination: getExaminationById,
  employees: getEmployeeById,
};
