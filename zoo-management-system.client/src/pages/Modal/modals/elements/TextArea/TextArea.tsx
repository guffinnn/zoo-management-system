import {
  StyledTextArea,
  TextAreaContainer,
} from '@pages/Modal/modals/elements/TextArea/styled.ts';
import { JSX } from 'react';

interface TextAreaProps {
  id: string;
  placeholder: string;
}

export function TextArea({ id, placeholder }: TextAreaProps): JSX.Element {
  return (
    <TextAreaContainer>
      <StyledTextArea id={id} placeholder={placeholder} />
    </TextAreaContainer>
  );
}
