import { UserState } from '@custom-types/database/user.ts';
import { Dispatch } from '@reduxjs/toolkit';
import { setUser } from '@store/userSlice.ts';
import { User } from 'firebase/auth';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

import { auth } from '../firebase.ts';

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
        dispatch(setUser({ email: userCredential.user.email }));
      }
    }
  } catch (error) {
    console.log(error);
  }
};
