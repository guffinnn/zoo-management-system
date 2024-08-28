import { DEFAULT_MIN_LENGTH, ERROR } from '@constants/values.ts';
import * as Yup from 'yup';

export const validationSchema = Yup.object({
  email: Yup.string().email(ERROR.EMAIL_FORMAT).required(ERROR.REQUIRED),
  password: Yup.string()
    .min(DEFAULT_MIN_LENGTH, ERROR.PASSWORD_MIN_LENGTH)
    .required(ERROR.REQUIRED),
});
