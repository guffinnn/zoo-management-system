import { StyledInput } from '@pages/Modal/modals/elements/Input/styled.ts';
import { JSX } from 'react';

interface InputProps {
  type: string;
  id: string;
  placeholder: string;
}

export function Input({ type, id, placeholder }: InputProps): JSX.Element {
  return <StyledInput type={type} id={id} placeholder={placeholder} />;
}
