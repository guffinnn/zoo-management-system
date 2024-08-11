import 'bootstrap/dist/css/bootstrap-utilities.min.css';

import {
  FormControl,
  FormLabel,
  FormSelect,
  InputGroup,
} from 'react-bootstrap';
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

export const MyFormLabel = styled(FormLabel)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 0 6px;
  gap: 10px;

  width: 100%;
  height: auto;

  margin: 0 auto;

  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 140%;

  color: var(--neutral-900);
`;

export const MyFormInput = styled(FormControl)`
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 10px;
  gap: 8px;

  width: 100%;
  height: 40px;

  margin-top: -20px;

  background: var(--neutral-0);
  border: 1px solid var(--neutral-200);
  border-radius: 8px;

  color: var(--neutral-900);

  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 140%;

  transition: border 0.1s ease-in-out;

  &:focus {
    border: 2px solid var(--primary-500);
  }

  &.error {
    border: 1px solid var(--danger-500);
  }
`;

export const MyInputGroup = styled(InputGroup)`
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

export const MyInputGroupText = styled(InputGroup.Text)`
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

export const SelectWithLabel = styled(FormSelect)`
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

export const InputWithLabel = styled(FormControl)`
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

export const TextAreaContainer = styled.div`
  position: relative;
  min-width: fit-content;
  height: fit-content;
  width: 100%;
  margin-top: -20px;

  &::after {
    box-sizing: border-box;
    content: url('../../../../assets/resizer.svg');
    position: absolute;
    bottom: 14px;
    right: 4px;
    width: 8px;
    height: 8px;
    object-fit: fill;
    pointer-events: none;
    z-index: 10;
  }
`;

export const TextArea = styled.textarea`
  box-shadow: none;

  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 10px;
  gap: 8px;

  width: 100%;
  height: 85px;

  background: var(--neutral-0);
  border: 1px solid var(--neutral-200);
  border-radius: 8px;

  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;

  color: var(--neutral-900);

  transition: border 0.1s ease;

  &:focus {
    border: 2px solid var(--primary-500);
  }
`;
