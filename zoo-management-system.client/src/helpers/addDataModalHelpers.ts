import {
  DataType,
  EntityData,
  EntityDataUnion,
} from '@custom-types/dataType.ts';
import {
  getAnimalById,
  getEmployeeById,
  getExaminationById,
  getWorkTimeById,
} from '@utils/dbService.ts';
import {
  putAnimal,
  putEmployee,
  putExamination,
  putWorkTime,
} from '@utils/putService.ts';

export const dataFetchers: {
  [key in DataType]: (id: string) => Promise<EntityData | null>;
} = {
  animal: getAnimalById,
  workTime: getWorkTimeById,
  medicalExamination: getExaminationById,
  employees: getEmployeeById,
};

export const dataPushers: {
  [key in DataType]: (param: EntityDataUnion) => Promise<void>;
} = {
  animal: putAnimal,
  workTime: putWorkTime,
  medicalExamination: putExamination,
  employees: putEmployee,
};
