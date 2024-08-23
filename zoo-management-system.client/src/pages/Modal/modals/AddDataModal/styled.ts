import 'bootstrap/dist/css/bootstrap-utilities.min.css';

import { FormControl, InputGroup } from 'react-bootstrap';
import styled from 'styled-components';

export const ModalContainer = styled.div`
  grid-row: 2 / 3;
  grid-column: 2 / 3;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0;

  width: 370px;
  height: fit-content;

  background: var(--neutral-0);
  border: 1px solid var(--neutral-200);
  box-shadow: 0 1px 2px #8080801e;
  border-radius: 8px;
`;

export const FormFrame = styled.div`
  width: 100%;
`;

export const StyledGroup = styled(InputGroup)`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;

  &.disabled {
    opacity: 0.6;
    color: var(--neutral-600);
  }
`;

export const StyledGroupText = styled(InputGroup.Text)`
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  align-items: center;

  background: var(--neutral-0);
  border: 1px solid var(--neutral-200);
  box-shadow:
    inset 0 7px 12px #ffffff14,
    inset 0 -2px 2px #30303019;
  border-radius: 8px;

  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 140%;

  color: var(--neutral-900);
  cursor: default;
`;

export const StyledInputWithLabel = styled(FormControl)`
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
