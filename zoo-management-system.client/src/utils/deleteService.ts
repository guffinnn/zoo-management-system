import { deleteDoc, doc as document } from 'firebase/firestore';

import { db } from '../firebase.ts';

interface DeleteProps {
  tableName: string;
  id: string;
}

export async function deleteEntityByTableAndId({ tableName, id }: DeleteProps) {
  try {
    let docRef = document(db, tableName, id);
    switch (tableName) {
      case 'animal':
      case 'workTime':
      case 'medicalExamination':
        docRef = document(db, tableName, id);
        await deleteDoc(docRef);
        break;
      case 'employee':
      case 'employees':
        docRef = document(db, 'employee', id);
        await deleteDoc(docRef);
        break;
      default:
        return new Error(`Unknown tableName: ${tableName}`);
    }
  } catch (error) {
    console.error('Error deleting document:', error);
    return null;
  }
}
