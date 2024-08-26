import { InputGroup } from 'react-bootstrap';
import styled from 'styled-components';

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

  &:focus {
    border: 2px solid var(--primary-500);
  }

  &.error {
    border-radius: 9px;
    border: 1px solid var(--danger-500);
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

export const ModalHeading = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 20px 24px 0;
  gap: 10px;

  width: 100%;
  height: auto;

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;

  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 140%;

  color: var(--neutral-900);
  cursor: default;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 24px;
  gap: 20px;

  width: 100%;
  height: auto;

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;

export const SubmitButton = styled.input`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 12px;
  gap: 8px;

  width: 100%;
  height: 40px;

  background: var(--primary-500);
  box-shadow:
    inset 0 7px 12px #ffffff14,
    inset 0 -2px 2px #30303019;
  border-radius: 8px;

  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 140%;

  color: var(--neutral-0);

  transition: all 0.1s ease-in-out;
  cursor: pointer;

  &:hover {
    background: #5261feff;
  }

  &:active {
    background: var(--primary-500);
    box-shadow: inset 0 4px 12px #0000001e;
  }

  @media (hover: none), (pointer: coarse) {
    transition: none;

    &:hover,
    &:focus {
      background: var(--primary-500);
    }

    &:active {
      background: var(--primary-500);
      box-shadow: inset 0 4px 12px #0000001e;
    }
  }
`;

export const ErrorWrapper = styled.div<{ error: string }>`
  position: relative;
  width: 100%;
  height: auto;

  &.error::after {
    content: '${({ error }) => (error.length > 0 ? error : null)}';

    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 6px 0 0;
    gap: 8px;

    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;

    width: 100%;
    height: auto;

    object-fit: contain;

    color: var(--danger-500);
  }
`;
