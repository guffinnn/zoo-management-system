import { FormikFields } from '@constants/tables/global.ts';
import {
  StyledFormCheck,
  StyledFormCheckInput,
  StyledFormCheckLabel,
} from '@pages/Modal/modals/elements/CheckBox/styled.ts';
import { ErrorWrapper } from '@pages/Modal/styled.ts';
import { useFormikContext } from 'formik';
import { JSX } from 'react';

interface CheckBoxProps {
  id: string;
  children: string;
}

export function CheckBox({ id, children }: CheckBoxProps): JSX.Element {
  const { handleChange, handleBlur, values, touched, errors } =
    useFormikContext<FormikFields>();
  const isValidField = `${touched[id] && errors[id] ? 'error' : null}`;

  return (
    <ErrorWrapper className={isValidField} error={`${errors[id]}`}>
      <StyledFormCheck>
        <StyledFormCheckInput
          id={id}
          name={id}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values[id]}
          className={isValidField}
        />
        <StyledFormCheckLabel htmlFor={id}>{children}</StyledFormCheckLabel>
      </StyledFormCheck>
    </ErrorWrapper>
  );
}
