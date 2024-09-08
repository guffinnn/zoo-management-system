import { Animal } from '@custom-types/database/animal.ts';
import { Employee } from '@custom-types/database/employee.ts';
import { MedicalExamination } from '@custom-types/database/medicalExamination.ts';
import { WorkTime } from '@custom-types/database/workTime.ts';
import {
  collection,
  DocumentData,
  getDocs,
  query,
  QueryDocumentSnapshot,
  where,
} from 'firebase/firestore';

import { db } from '../firebase';

interface SortMethodsProps {
  value: string;
  param?: string;
  collectionName: string;
  transformData?: (
    data: DocumentData,
    doc: QueryDocumentSnapshot,
  ) => Animal | Promise<WorkTime> | Promise<MedicalExamination> | Employee;
}

export async function sortDataByValue<T>({
  value,
  param = 'name',
  collectionName,
  transformData,
}: SortMethodsProps): Promise<T[]> {
  const collectionRef = collection(db, collectionName);
  const q = query(collectionRef, where(param, '==', value));
  const querySnapshot = await getDocs(q);

  const sortedData: T[] = [];
  for (const doc of querySnapshot.docs) {
    let data = doc.data() as Animal | WorkTime | MedicalExamination | Employee;
    if (transformData) {
      data = await transformData(data, doc);
    }
    sortedData.push(data as T);
  }

  return sortedData;
}
