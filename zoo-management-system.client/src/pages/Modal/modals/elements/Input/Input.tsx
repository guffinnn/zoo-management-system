import { FormikFields } from '@constants/tables/global.ts';
import {
  StyledInput,
  StyledInputWrapper,
} from '@pages/Modal/modals/elements/Input/styled.ts';
import { useFormikContext } from 'formik';
import { JSX } from 'react';

interface InputProps {
  type: string;
  id: string;
  placeholder: string;
}

export function Input({ type, id, placeholder }: InputProps): JSX.Element {
  const { handleChange, handleBlur, values, touched, errors } =
    useFormikContext<FormikFields>();
  const isValidField = `${touched[id] && errors[id] ? 'error' : null}`;

  return (
    <StyledInputWrapper className={isValidField} error={`${errors[id]}`}>
      <StyledInput
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values[id]}
        className={isValidField}
      />
    </StyledInputWrapper>
  );
}
