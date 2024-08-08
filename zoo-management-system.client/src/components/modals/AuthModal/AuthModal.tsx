import {
  Form,
  Input,
  InputWrapper,
  Label,
  ModalContainer,
  ModalHeading,
  NotifyFrame,
  NotifyText,
  SubmitButton,
} from '@components/modals/AuthModal/styled.ts';
import { PATH } from '@constants/paths.ts';
import { DEFAULT_MIN_LENGTH, ERROR } from '@constants/values.ts';
import { useFormik } from 'formik';
import { JSX } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  email: Yup.string().email(ERROR.EMAIL_FORMAT).required(ERROR.REQUIRED),
  password: Yup.string()
    .min(DEFAULT_MIN_LENGTH, ERROR.PASSWORD_MIN_LENGTH)
    .required(ERROR.REQUIRED),
});

function AuthModal(): JSX.Element {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      navigate(PATH.TO_STATUS_MODAL);
    },
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
            onChange={formik.handleChange}
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
            onChange={formik.handleChange}
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
