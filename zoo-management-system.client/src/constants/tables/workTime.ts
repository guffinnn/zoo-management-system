import { ERROR } from '@constants/values.ts';
import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  employee: Yup.string().required(ERROR.REQUIRED),
  type_of_work: Yup.string().required(ERROR.REQUIRED),
  status: Yup.string().required(ERROR.REQUIRED),
  time: Yup.number().required(ERROR.REQUIRED).typeError(ERROR.NOT_A_NUMBER),
  request: Yup.boolean()
    .required(ERROR.REQUIRED)
    .oneOf([true], ERROR.REQUIRED_TRUE),
});
