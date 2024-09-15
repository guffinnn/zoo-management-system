import { TABLE_NAMES } from '@constants/pages.ts';
import { Animal } from '@custom-types/database/animal.ts';
import { Employee } from '@custom-types/database/employee.ts';
import { MedicalExamination } from '@custom-types/database/medicalExamination.ts';
import { WorkTime } from '@custom-types/database/workTime.ts';
import { sortDataByValue } from '@utils/searchService.ts';
import {
  collection,
  doc as document,
  DocumentReference,
  getDoc,
  getDocs,
} from 'firebase/firestore';

import { db } from '../firebase';

export const searchMethods = {
  animal: async (value: string) => {
    return sortDataByValue<Animal>({
      value,
      param: 'nickname',
      collectionName: TABLE_NAMES.ANIMAL,
      transformData: (data, doc) => ({
        nickname: data.nickname,
        species: data.species,
        gender: data.gender,
        date_of_birth: data.date_of_birth,
        date_of_registration: data.date_of_registration,
        photo: data.photo || 'Пусто',
        actions: '',
        id: doc.id,
      }),
    });
  },
  workTime: async (value: string) => {
    return sortDataByValue<Promise<WorkTime>>({
      value,
      param: 'date_of_work',
      collectionName: TABLE_NAMES.WORKTIME,
      transformData: async (data, doc) => {
        const employeeRef = data.employee_id as DocumentReference;
        const employeeDoc = await getDoc(employeeRef);
        const employeeData = employeeDoc.data() as {
          surname: string;
          name: string;
          middle_name: string;
        };

        const detailsQuerySnapshot = await getDocs(
          collection(db, 'workTimeDetails'),
        );
        const detailsData = detailsQuerySnapshot.docs
          .find((detailDoc) => detailDoc.data().worktime_id.id === doc.id)
          ?.data();

        let workTypeName = 'Неизвестно';
        if (detailsData && detailsData.worktype_id) {
          const workTypeRef = document(
            db,
            `workType/${detailsData.worktype_id}`,
          );
          const workTypeDoc = await getDoc(workTypeRef);
          const workTypeData = workTypeDoc.data() as { name: string };
          workTypeName = workTypeData.name;
        }

        return {
          employee: `${employeeData.surname} ${employeeData.name} ${employeeData.middle_name}`,
          date_of_work: data.date_of_work,
          type_of_work: workTypeName,
          status: data.status,
          time: data.time,
          actions: '',
          id: doc.id,
        };
      },
    });
  },
  medicalExamination: async (value: string) => {
    return sortDataByValue<Promise<MedicalExamination>>({
      value,
      param: 'date_of_examination',
      collectionName: TABLE_NAMES.MEDICAL_EXAMINATION,
      transformData: async (data, doc) => {
        const animalRef = data.animal_id as DocumentReference;
        const animalDoc = await getDoc(animalRef);
        const animalData = animalDoc.data() as {
          nickname: string;
          species: string;
        };

        return {
          animal: `${animalData.nickname}, ${animalData.species}`,
          date_of_examination: data.date_of_examination,
          notes: data.notes,
          actions: '',
          id: doc.id,
        };
      },
    });
  },
  employees: async (value: string) => {
    return sortDataByValue<Employee>({
      value,
      param: 'surname',
      collectionName: TABLE_NAMES.EMPLOYEES,
      transformData: (data, doc) => ({
        surname: data.surname,
        name: data.name,
        middle_name: data.middle_name,
        role: data.role,
        date_of_hire: data.date_of_hire,
        salary: data.salary,
        actions: '',
        id: doc.id,
      }),
    });
  },
};
