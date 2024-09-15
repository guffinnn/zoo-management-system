import { TABLE_NAMES } from '@constants/pages.ts';
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

  const querySnapshot = await getDocs(collection(db, TABLE_NAMES.ANIMAL));
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
      id: doc.id,
    };
  });

  cachedAnimals = animals;
  return animals;
}

export async function getAnimalById(id: string): Promise<Animal | null> {
  try {
    const docRef = document(db, TABLE_NAMES.ANIMAL, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      return {
        id: docSnap.id,
        nickname: data.nickname,
        species: data.species,
        gender: data.gender,
        date_of_birth: data.date_of_birth,
        date_of_registration: data.date_of_registration,
        photo: data.photo || 'Пусто',
        actions: '',
      };
    } else {
      console.log('No such document!');
      return null;
    }
  } catch (error) {
    console.error('Error getting document:', error);
    return null;
  }
}

let cachedWorkTime: WorkTime[] | null = null;

export async function getWorkTime(): Promise<WorkTime[]> {
  if (cachedWorkTime) {
    return cachedWorkTime;
  }

  const querySnapshot = await getDocs(collection(db, TABLE_NAMES.WORKTIME));
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
        id: doc.id,
      };
    }),
  );

  cachedWorkTime = workTime;
  return workTime;
}

export async function getWorkTimeById(id: string): Promise<WorkTime | null> {
  try {
    const docRef = document(db, TABLE_NAMES.WORKTIME, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
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
        .find((detailDoc) => detailDoc.data().worktime_id.id === id)
        ?.data();

      let workTypeName = 'Неизвестно';
      if (detailsData && detailsData.worktype_id) {
        const workTypeRef = document(db, `workType/${detailsData.worktype_id}`);
        const workTypeDoc = await getDoc(workTypeRef);
        const workTypeData = workTypeDoc.data() as { name: string };
        workTypeName = workTypeData.name;
      }

      return {
        id: docSnap.id,
        employee: `${employeeData.surname} ${employeeData.name} ${employeeData.middle_name}`,
        date_of_work: data.date_of_work,
        type_of_work: workTypeName,
        status: data.status,
        time: data.time,
        actions: '',
      };
    } else {
      console.log('No such document!');
      return null;
    }
  } catch (error) {
    console.error('Error getting document:', error);
    return null;
  }
}

let cachedMedicalExaminations: MedicalExamination[] | null = null;

export async function getExaminations(): Promise<MedicalExamination[]> {
  if (cachedMedicalExaminations) {
    return cachedMedicalExaminations;
  }

  const querySnapshot = await getDocs(
    collection(db, TABLE_NAMES.MEDICAL_EXAMINATION),
  );
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
        id: doc.id,
      };
    }),
  );

  cachedMedicalExaminations = examination;
  return examination;
}

export async function getExaminationById(
  id: string,
): Promise<MedicalExamination | null> {
  try {
    const docRef = document(db, TABLE_NAMES.MEDICAL_EXAMINATION, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();

      const animalRef = data.animal_id;
      const animalDoc = await getDoc(animalRef);
      const animalData = animalDoc.data() as {
        nickname: string;
        species: string;
      };

      return {
        id: docSnap.id,
        animal: `${animalData.nickname}, ${animalData.species}`,
        date_of_examination: data.date_of_examination,
        notes: data.notes,
        actions: '',
      };
    } else {
      console.log('No such document!');
      return null;
    }
  } catch (error) {
    console.error('Error getting document:', error);
    return null;
  }
}

let cachedEmployees: Employee[] | null = null;

export async function getEmployees(): Promise<Employee[]> {
  if (cachedEmployees) {
    return cachedEmployees;
  }

  const querySnapshot = await getDocs(collection(db, TABLE_NAMES.EMPLOYEES));
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
        id: doc.id,
      };
    }),
  );

  cachedEmployees = employees;
  return employees;
}

export async function getEmployeeById(id: string): Promise<Employee | null> {
  try {
    const docRef = document(db, TABLE_NAMES.EMPLOYEES, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();

      return {
        id: docSnap.id,
        surname: data.surname,
        name: data.name,
        middle_name: data.middle_name,
        role: data.role,
        date_of_hire: data.date_of_hire,
        salary: data.salary,
        actions: '',
      };
    } else {
      console.log('No such document!');
      return null;
    }
  } catch (error) {
    console.error('Error getting document:', error);
    return null;
  }
}
