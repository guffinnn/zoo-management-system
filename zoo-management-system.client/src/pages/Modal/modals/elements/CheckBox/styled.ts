import { FormCheck } from 'react-bootstrap';
import FormCheckInput from 'react-bootstrap/FormCheckInput';
import FormCheckLabel from 'react-bootstrap/FormCheckLabel';
import styled from 'styled-components';

export const StyledFormCheck = styled(FormCheck)``;

export const StyledFormCheckInput = styled(FormCheckInput)`
  box-shadow: none;
  border-radius: 6px;
  border: 2px solid var(--neutral-400);
  margin-right: 8px;

  &:checked {
    box-shadow: none;
  }
`;

export const StyledFormCheckLabel = styled(FormCheckLabel)``;
