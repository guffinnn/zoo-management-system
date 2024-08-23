import {
  StyledFormCheck,
  StyledFormCheckInput,
  StyledFormCheckLabel,
} from '@pages/Modal/modals/elements/CheckBox/styled.ts';
import { JSX } from 'react';

interface CheckBoxProps {
  id: string;
  children: string;
}

export function CheckBox({ id, children }: CheckBoxProps): JSX.Element {
  return (
    <StyledFormCheck>
      <StyledFormCheckInput value="" id={id} />
      <StyledFormCheckLabel htmlFor={id}>{children}</StyledFormCheckLabel>
    </StyledFormCheck>
  );
}
