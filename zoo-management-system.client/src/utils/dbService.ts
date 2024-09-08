import { Animal } from '@custom-types/database/animal.ts';
import { Employee } from '@custom-types/database/employee.ts';
import { MedicalExamination } from '@custom-types/database/medicalExamination.ts';
import { WorkTime } from '@custom-types/database/workTime.ts';
import {
  collection,
  doc as document,
  getDoc,
  getDocs,
} from 'firebase/firestore';

import { db } from '../firebase';

let cachedAnimals: Animal[] | null = null;

export async function getAnimals(): Promise<Animal[]> {
  if (cachedAnimals) {
    return cachedAnimals;
  }

  const querySnapshot = await getDocs(collection(db, 'animal'));
  const animals = querySnapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      nickname: data.nickname,
      species: data.species,
      gender: data.gender,
      date_of_birth: data.date_of_birth,
      date_of_registration: data.date_of_registration,
      photo: data.photo || 'Пусто',
      actions: '',
    };
  });

  cachedAnimals = animals;
  return animals;
}

let cachedWorkTime: WorkTime[] | null = null;

export async function getWorkTime(): Promise<WorkTime[]> {
  if (cachedWorkTime) {
    return cachedWorkTime;
  }

  const querySnapshot = await getDocs(collection(db, 'workTime'));
  const workTime = await Promise.all(
    querySnapshot.docs.map(async (doc) => {
      const data = doc.data();

      const employeeRef = data.employee_id;
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
        const workTypeRef = document(db, `workType/${detailsData.worktype_id}`);
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
    }),
  );

  cachedWorkTime = workTime;
  return workTime;
}

let cachedMedicalExaminations: MedicalExamination[] | null = null;

export async function getExaminations(): Promise<MedicalExamination[]> {
  if (cachedMedicalExaminations) {
    return cachedMedicalExaminations;
  }

  const querySnapshot = await getDocs(collection(db, 'medicalExamination'));
  const examination = await Promise.all(
    querySnapshot.docs.map(async (doc) => {
      const data = doc.data();

      const animalRef = data.animal_id;
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
    }),
  );

  cachedMedicalExaminations = examination;
  return examination;
}

let cachedEmployees: Employee[] | null = null;

export async function getEmployees(): Promise<Employee[]> {
  if (cachedEmployees) {
    return cachedEmployees;
  }

  const querySnapshot = await getDocs(collection(db, 'employee'));
  const employees = await Promise.all(
    querySnapshot.docs.map(async (doc) => {
      const data = doc.data();

      return {
        surname: data.surname,
        name: data.name,
        middle_name: data.middle_name,
        role: data.role,
        date_of_hire: data.date_of_hire,
        salary: data.salary,
        actions: '',
      };
    }),
  );

  cachedEmployees = employees;
  return employees;
}
