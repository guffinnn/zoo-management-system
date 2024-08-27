import { PATH } from '@constants/paths.ts';
import { DEFAULT_MIN_LENGTH, ERROR } from '@constants/values.ts';
import {
  Input,
  InputWrapper,
  Label,
  ModalContainer,
  NotifyFrame,
  NotifyText,
} from '@pages/Modal/modals/AuthModal/styled.ts';
import { Form, ModalHeading, SubmitButton } from '@pages/Modal/styled.ts';
import { RootState } from '@store/store.ts';
import { logOut as logOutFromRedux, setUser } from '@store/userSlice.ts';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { FormikHelpers, useFormik } from 'formik';
import React, { JSX, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import { auth } from '../../../../firebase.ts';

interface UserState {
  email?: string;
  password?: string;
}

const validationSchema = Yup.object({
  email: Yup.string().email(ERROR.EMAIL_FORMAT).required(ERROR.REQUIRED),
  password: Yup.string()
    .min(DEFAULT_MIN_LENGTH, ERROR.PASSWORD_MIN_LENGTH)
    .required(ERROR.REQUIRED),
});

export const logOut = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error(error);
  }
};

function AuthModal(): JSX.Element {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.user);

  const [userData, setUserData] = useState<UserState>({
    email: user?.email,
    password: '',
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        if (user.email) {
          dispatch(setUser({ email: user.email }));
          console.log(user);
          navigate(PATH.TO_STATUS_MODAL);
        } else {
          console.log('Ошибка: User is not null');
        }
      } else {
        dispatch(logOutFromRedux());
        logOut();
      }
    });

    return () => unsubscribe();
  }, [userData, dispatch]);

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setUserData({
      ...user,
      email: e.target.value,
    });

    formik.handleChange(e);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setUserData({
      ...user,
      password: e.target.value,
    });

    formik.handleChange(e);
  };

  const navigate = useNavigate();
  const handleSubmit = async (
    values: UserState,
    { setSubmitting }: FormikHelpers<UserState>,
  ) => {
    await signIn(values);
    setSubmitting(false);
    navigate(PATH.TO_STATUS_MODAL);
  };

  const signIn = async (values: UserState) => {
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

  const formik = useFormik<UserState>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: handleSubmit,
  });
  const isValidEmail = `${formik.touched.email && formik.errors.email ? 'error' : null}`;
  const isValidPassword = `${formik.touched.password && formik.errors.password ? 'error' : null}`;

  return (
    <ModalContainer>
      <ModalHeading>Авторизация</ModalHeading>
      <Form onSubmit={formik.handleSubmit}>
        <Label htmlFor="email">Электронная почта</Label>
        <InputWrapper className={isValidEmail} error={`${formik.errors.email}`}>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="example@mail.com"
            onChange={handleLoginChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className={isValidEmail}
          />
        </InputWrapper>
        <Label htmlFor="password">Пароль</Label>
        <InputWrapper
          className={isValidPassword}
          error={`${formik.errors.password}`}
        >
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="Введите пароль"
            onChange={handlePasswordChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className={isValidPassword}
          />
        </InputWrapper>
        <SubmitButton type="submit" value="Войти" />
      </Form>
      <NotifyFrame>
        <NotifyText>
          Еще нет аккаунта? <span>Необходимо разрешение администратора</span>
        </NotifyText>
      </NotifyFrame>
    </ModalContainer>
  );
}

export default AuthModal;
