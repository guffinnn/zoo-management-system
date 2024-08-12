import {
  StyledGroup,
  StyledGroupText,
  StyledInputWithLabel,
} from '@pages/Modal/modals/AddDataModal/styled.ts';
import { JSX } from 'react';

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
  return (
    <StyledGroup>
      <StyledGroupText>{label}</StyledGroupText>
      <StyledInputWithLabel type="date" id={id} placeholder={placeholder} />
    </StyledGroup>
  );
}
