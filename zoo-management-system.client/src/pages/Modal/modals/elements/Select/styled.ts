import { FormSelect } from 'react-bootstrap';
import styled from 'styled-components';

export const StyledSelect = styled(FormSelect)`
  box-sizing: border-box;

  padding: 8px 10px;

  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'label input';
  align-items: center;
  align-content: center;
  gap: 8px;

  grid-row: 1;
  grid-column: 2 / 3;

  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 140%;

  color: var(--neutral-900);

  width: 100%;
  height: 40px;

  border: 1px solid var(--neutral-200);
  box-shadow:
    inset 0 7px 12px #ffffff14,
    inset 0 -2px 2px #30303019;
  border-radius: 8px;

  transition: border 0.1s ease;
`;
