import { FormikFields } from '@constants/tables/global.ts';
import {
  StyledTextArea,
  TextAreaContainer,
} from '@pages/Modal/modals/elements/TextArea/styled.ts';
import { useFormikContext } from 'formik';
import { JSX } from 'react';
import { ErrorWrapper } from '@pages/Modal/styled.ts';

interface TextAreaProps {
  id: string;
  placeholder: string;
}

export function TextArea({ id, placeholder }: TextAreaProps): JSX.Element {
  const { handleChange, handleBlur, values, touched, errors } =
    useFormikContext<FormikFields>();
  const isValidField = `${touched[id] && errors[id] ? 'error' : null}`;

  return (
    <ErrorWrapper className={isValidField} error={`${errors[id]}`}>
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
    </ErrorWrapper>
  );
}
