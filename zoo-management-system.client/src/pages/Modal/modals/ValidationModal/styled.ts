import styled from 'styled-components';

export const Button = styled.button`
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 12px;
  gap: 8px;

  width: 100%;
  height: 40px;

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

  transition: background 0.1s ease-in-out;

  &.success {
    color: var(--neutral-0);
    margin-bottom: -6px;

    background: var(--success-500);
    box-shadow:
      inset 0 7px 12px #ffffff14,
      inset 0 -2px 2px #30303019;
  }

  &.success:hover {
    background: var(--success-400);
  }

  &.success:active {
    background: var(--success-500);
    box-shadow: inset 0 4px 12px #0000001e;
  }

  &.error {
    color: var(--neutral-0);
    margin-bottom: -6px;

    background: var(--danger-500);
    box-shadow:
      inset 0 7px 12px #ffffff14,
      inset 0 -2px 2px #30303019;
  }

  &.error:hover {
    background: var(--danger-400);
  }

  &.error:active {
    background: var(--danger-500);
    box-shadow: inset 0 4px 12px #0000001e;
  }

  &:hover {
    background: var(--neutral-50);
  }

  &:active {
    background: var(--neutral-0);
    box-shadow: inset 0 4px 12px #0000001e;
  }

  @media (hover: none), (pointer: coarse) {
    &.success:hover,
    &.success:focus {
      background: var(--success-500);
      box-shadow:
        inset 0 7px 12px #ffffff14,
        inset 0 -2px 2px #30303019;
    }

    &.success:active {
      background: var(--success-500);
      box-shadow: inset 0 4px 12px #0000001e;
    }
  }

  @media (hover: none), (pointer: coarse) {
    &.error:hover,
    &.error:focus {
      background: var(--danger-500);
      box-shadow:
        inset 0 7px 12px #ffffff14,
        inset 0 -2px 2px #30303019;
    }

    &.error:active {
      background: var(--danger-500);
      box-shadow: inset 0 4px 12px #0000001e;
    }
  }

  @media (hover: none), (pointer: coarse) {
    &:hover,
    &:focus {
      background: var(--neutral-0);
    }

    &:active {
      background: var(--neutral-0);
      box-shadow: inset 0 4px 12px #0000001e;
    }
  }
`;
