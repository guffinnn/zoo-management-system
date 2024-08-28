import { PATH } from '@constants/paths.ts';
import { validationSchema } from '@constants/tables/user.ts';
import { UserState } from '@custom-types/database/user.ts';
import { useAuth } from '@hooks/useAuth.ts';
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
import { signIn } from '@utils/authService.ts';
import { FormikHelpers, useFormik } from 'formik';
import React, { JSX, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function AuthModal(): JSX.Element {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.user);

  const [userData, setUserData] = useState<UserState>({
    email: user?.email,
    password: '',
  });

  useAuth(userData);

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
    await signIn(values, dispatch);
    setSubmitting(false);
    navigate(PATH.TO_STATUS_MODAL);
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
