import { Animal } from '@custom-types/database/animal.ts';
import { WorkTime } from '@custom-types/database/workTime.ts';
import { collection, getDoc, getDocs, doc as document } from 'firebase/firestore';

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