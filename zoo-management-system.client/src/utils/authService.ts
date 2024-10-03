import { Employee } from '@custom-types/database/employee.ts';
import { UserState } from '@custom-types/user.ts';
import { Dispatch } from '@reduxjs/toolkit';
import { setUser } from '@store/userSlice.ts';
import { User } from 'firebase/auth';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { collection, getDocs, query, where } from 'firebase/firestore';

import { auth, db } from '../firebase.ts';

export const logOut = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error(error);
  }
};

export const observeAuthState = (callback: (user: User | null) => void) => {
  return onAuthStateChanged(auth, callback);
};

export const signIn = async (values: UserState, dispatch: Dispatch) => {
  try {
    if (values.email && values.password) {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password,
      );
      if (userCredential.user.email) {
        const employee = await getEmployeeByUserUid(userCredential.user.uid);
        if (employee) {
          dispatch(
            setUser({
              uid: userCredential.user.uid,
              email: userCredential.user.email,
              is_admin: employee?.is_admin || false,
            }),
          );
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
};

export async function getEmployeeByUserUid(
  userUid: string,
): Promise<Employee | null> {
  try {
    const q = query(
      collection(db, 'employee'),
      where('user_uid', '==', userUid),
    );
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0];
      const data = doc.data();

      return {
        id: doc.id,
        surname: data.surname,
        name: data.name,
        middle_name: data.middle_name,
        role: data.role,
        date_of_hire: data.date_of_hire,
        salary: data.salary,
        actions: '',
        is_admin: data?.is_admin,
      };
    } else {
      console.log('No such document!');
      return null;
    }
  } catch (error) {
    console.error('Error getting documents:', error);
    return null;
  }
}
