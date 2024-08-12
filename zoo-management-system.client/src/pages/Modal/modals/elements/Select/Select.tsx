import {
  StyledGroup,
  StyledGroupText,
} from '@pages/Modal/modals/AddDataModal/styled.ts';
import { StyledSelect } from '@pages/Modal/modals/elements/Select/styled.ts';
import { JSX } from 'react';

interface SelectProps {
  id: string;
  label: string;
  options: { value: string; text: string }[];
}

export function Select({ id, label, options }: SelectProps): JSX.Element {
  return (
    <StyledGroup>
      <StyledGroupText>{label}</StyledGroupText>
      <StyledSelect id={id} className="form-control">
        <option className="option" value="NULL">
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
        </option>
      </StyledSelect>
    </StyledGroup>
  );
}
