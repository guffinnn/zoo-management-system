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
  height: 100%;

  background: var(--neutral-0);
  border: 1px solid var(--neutral-200);
  box-shadow: 0 1px 2px #8080801e;
  border-radius: 8px;
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

export const Label = styled.label`
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

export const InputWrapper = styled.div<{ error: string }>`
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

export const Input = styled.input`
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

export const NotifyFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 20px 24px;
  gap: 10px;

  width: 100%;
  height: auto;

  background: var(--neutral-50);
  border-radius: 0 0 8px 8px;

  flex: none;
  order: 2;
  align-self: stretch;
  flex-grow: 0;
`;

export const NotifyText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 140%;
  text-align: center;

  color: var(--neutral-900);

  & span {
    color: var(--primary-500);
  }

  cursor: default;
`;
