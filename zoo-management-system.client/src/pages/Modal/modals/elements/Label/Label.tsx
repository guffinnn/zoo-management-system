import { StyledLabel } from '@pages/Modal/modals/elements/Label/styled.ts';
import { JSX } from 'react';

interface LabelProps {
  id: string;
  htmlFor: string;
  children: string;
}

export function Label({ htmlFor, children }: LabelProps): JSX.Element {
  return <StyledLabel htmlFor={htmlFor}>{children}</StyledLabel>;
}
