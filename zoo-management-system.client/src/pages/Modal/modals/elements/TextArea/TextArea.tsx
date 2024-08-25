import { FormikFields } from '@constants/tables/global.ts';
import { StyledInputWrapper } from '@pages/Modal/modals/elements/Input/styled.ts';
import {
  StyledTextArea,
  TextAreaContainer,
} from '@pages/Modal/modals/elements/TextArea/styled.ts';
import { useFormikContext } from 'formik';
import { JSX } from 'react';

interface TextAreaProps {
  id: string;
  placeholder: string;
}

export function TextArea({ id, placeholder }: TextAreaProps): JSX.Element {
  const { handleChange, handleBlur, values, touched, errors } =
    useFormikContext<FormikFields>();
  const isValidField = `${touched[id] && errors[id] ? 'error' : null}`;

  return (
    <StyledInputWrapper className={isValidField} error={`${errors[id]}`}>
      <TextAreaContainer>
        <StyledTextArea
          id={id}
          name={id}
          placeholder={placeholder}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values[id]}
          className={isValidField}
        />
      </TextAreaContainer>
    </StyledInputWrapper>
  );
}
