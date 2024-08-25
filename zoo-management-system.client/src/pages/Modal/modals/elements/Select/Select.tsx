import { FormikFields } from '@constants/tables/global.ts';
import { StyledSelect } from '@pages/Modal/modals/elements/Select/styled.ts';
import { useFormikContext } from 'formik';
import { JSX } from 'react';
import { StyledGroup, StyledGroupText, ErrorWrapper } from '@pages/Modal/styled.ts';

interface SelectProps {
  id: string;
  label: string;
  options: { value: string; text: string }[];
}

export function Select({ id, label, options }: SelectProps): JSX.Element {
  const { handleChange, handleBlur, values, touched, errors } =
    useFormikContext<FormikFields>();
  const isValidField = `${touched[id] && errors[id] ? 'error' : null}`;

  return (
    <ErrorWrapper className={isValidField} error={`${errors[id]}`}>
      <StyledGroup className={isValidField}>
        <StyledGroupText>{label}</StyledGroupText>
        <StyledSelect
          id={id}
          name={id}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values[id]}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
        </StyledSelect>
      </StyledGroup>
    </ErrorWrapper>
  );
}
