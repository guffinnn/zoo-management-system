import { FormikFields } from '@constants/tables/global.ts';
import { StyledInputWithLabel } from '@pages/Modal/modals/elements/DateInput/styled.ts';
import {
  ErrorWrapper,
  StyledGroup,
  StyledGroupText,
} from '@pages/Modal/styled.ts';
import { useFormikContext } from 'formik';
import { JSX } from 'react';

interface DateInputProps {
  id: string;
  label: string;
  placeholder: string;
}

export function DateInput({
  id,
  label,
  placeholder,
}: DateInputProps): JSX.Element {
  const { handleChange, handleBlur, values, touched, errors } =
    useFormikContext<FormikFields>();
  const isValidField = `${touched[id] && errors[id] ? 'error' : null}`;

  return (
    <ErrorWrapper className={isValidField} error={`${errors[id]}`}>
      <StyledGroup className={isValidField}>
        <StyledGroupText>{label}</StyledGroupText>
        <StyledInputWithLabel
          type="date"
          id={id}
          name={id}
          placeholder={placeholder}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values[id]}
        />
      </StyledGroup>
    </ErrorWrapper>
  );
}
