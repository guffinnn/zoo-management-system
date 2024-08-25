import { FormikFields } from '@constants/tables/global.ts';
import {
  StyledGroup,
  StyledGroupText,
} from '@pages/Modal/modals/AddDataModal/styled.ts';
import { StyledInputWrapper } from '@pages/Modal/modals/elements/Input/styled.ts';
import { StyledSelect } from '@pages/Modal/modals/elements/Select/styled.ts';
import { useFormikContext } from 'formik';
import { JSX } from 'react';

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
    <StyledInputWrapper className={isValidField} error={`${errors[id]}`}>
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
    </StyledInputWrapper>
  );
}
