import { TABLE_NAMES } from '@constants/pages.ts';
import { Animal } from '@custom-types/database/animal.ts';
import { Employee } from '@custom-types/database/employee.ts';
import { MedicalExamination } from '@custom-types/database/medicalExamination.ts';
import { WorkTime } from '@custom-types/database/workTime.ts';
import {
  addDoc,
  collection,
  doc as document,
  setDoc,
} from 'firebase/firestore';

import { db } from '../firebase';

export async function putAnimal(animal: Animal) {
  const animalForDB = {
    nickname: animal.nickname,
    species: animal.species,
    gender: animal.gender,
    date_of_birth: animal.date_of_birth,
    date_of_registration: animal.date_of_registration,
    photo: null,
  };

  if (animal.id) {
    const animalRef = document(db, TABLE_NAMES.ANIMAL, animal.id);
    await setDoc(animalRef, animalForDB);
  } else {
    const collectionRef = collection(db, TABLE_NAMES.ANIMAL);
    await addDoc(collectionRef, animalForDB);
  }
}

export async function putWorkTime(workTime: WorkTime) {
  const employeeRef = document(
    db,
    'employee',
    workTime.employee_id ?? 'Y1JXT7IpRSzS9JKRSb2s',
  );

  const workTimeForDB = {
    employee_id: employeeRef,
    date_of_work: workTime.date_of_work,
    status: workTime.status,
    time: workTime.time,
  };

  let workTimeId: string;

  if (workTime.id) {
    workTimeId = workTime.id;
    const workTimeRef = document(db, TABLE_NAMES.WORKTIME, workTimeId);
    await setDoc(workTimeRef, workTimeForDB);
  } else {
    const newDocRef = document(collection(db, TABLE_NAMES.WORKTIME));
    workTimeId = newDocRef.id;
    await setDoc(newDocRef, workTimeForDB);
  }

  const workTimeDetailsForDB = {
    animal_id: null,
    aviary_id: null,
    worktime_id: document(db, TABLE_NAMES.WORKTIME, workTimeId),
    worktype_id: workTime.type_of_work,
  };

  const workTimeDetailsRef = document(db, 'workTimeDetails', workTimeId);
  await setDoc(workTimeDetailsRef, workTimeDetailsForDB);

  await setDoc(
    document(db, TABLE_NAMES.WORKTIME, workTimeId),
    {
      ...workTimeForDB,
      worktimedetails_id: workTimeDetailsRef,
    },
    { merge: true },
  );
}

export async function putExamination(examination: MedicalExamination) {
  const animalRef = document(
    db,
    'animal',
    examination.animal_id ?? 'euZQz6eChktDiGFaSfJq',
  );

  const examinationForDB = {
    animal_id: animalRef,
    date_of_examination: examination.date_of_examination,
    notes: examination.notes,
  };

  if (examination.id) {
    const examinationRef = document(
      db,
      TABLE_NAMES.MEDICAL_EXAMINATION,
      examination.id,
    );
    await setDoc(examinationRef, examinationForDB);
  } else {
    const collectionRef = collection(db, TABLE_NAMES.MEDICAL_EXAMINATION);
    await addDoc(collectionRef, examinationForDB);
  }
}

export async function putEmployee(employee: Employee) {
  const employeeForDB = {
    surname: employee.surname,
    name: employee.name,
    middle_name: employee.middle_name,
    role: employee.role,
    date_of_hire: employee.date_of_hire,
    salary: employee.salary,
  };

  if (employee.id) {
    const employeeRef = document(db, TABLE_NAMES.EMPLOYEES, employee.id);
    await setDoc(employeeRef, employeeForDB);
  } else {
    const collectionRef = collection(db, TABLE_NAMES.EMPLOYEES);
    await addDoc(collectionRef, employeeForDB);
  }
}
