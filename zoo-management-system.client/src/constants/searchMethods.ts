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
      collectionName: 'animal',
      transformData: (data) => ({
        nickname: data.nickname,
        species: data.species,
        gender: data.gender,
        date_of_birth: data.date_of_birth,
        date_of_registration: data.date_of_registration,
        photo: data.photo || 'Пусто',
        actions: '',
      }),
    });
  },
  workTime: async (value: string) => {
    return sortDataByValue<Promise<WorkTime>>({
      value,
      param: 'date_of_work',
      collectionName: 'workTime',
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
        };
      },
    });
  },
  medicalExamination: async (value: string) => {
    return sortDataByValue<Promise<MedicalExamination>>({
      value,
      param: 'date_of_examination',
      collectionName: 'medicalExamination',
      transformData: async (data) => {
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
        };
      },
    });
  },
  employees: async (value: string) => {
    return sortDataByValue<Employee>({
      value,
      param: 'surname',
      collectionName: 'employee',
      transformData: (data) => ({
        surname: data.surname,
        name: data.name,
        middle_name: data.middle_name,
        role: data.role,
        date_of_hire: data.date_of_hire,
        salary: data.salary,
        actions: '',
      }),
    });
  },
};
