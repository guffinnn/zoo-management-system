import { Animal } from '@custom-types/database/animal.ts';
import { Employee } from '@custom-types/database/employee.ts';
import { MedicalExamination } from '@custom-types/database/medicalExamination.ts';
import { WorkTime } from '@custom-types/database/workTime.ts';

export type DataType =
  | 'animal'
  | 'workTime'
  | 'medicalExamination'
  | 'employees';

export type EntityData = Animal | WorkTime | MedicalExamination | Employee;

export type EntityDataUnion = Animal & WorkTime & MedicalExamination & Employee;

export type TableData =
  | Animal[]
  | WorkTime[]
  | MedicalExamination[]
  | Employee[];
