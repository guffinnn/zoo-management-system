import { FormikFields } from '@constants/tables/global.ts';
import { useFormikContext } from 'formik';
import { JSX } from 'react';
import { StyledGroup, StyledGroupText, ErrorWrapper } from '@pages/Modal/styled.ts';
import { StyledInputWithLabel } from '@pages/Modal/modals/elements/DateInput/styled.ts';

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
