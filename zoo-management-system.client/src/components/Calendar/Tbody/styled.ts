import styled from 'styled-components';

export const Tdescription = styled.td`
  &.time {
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-start;
    padding: 8px;
    gap: 10px;

    width: 80px;
    min-width: 0;
    height: auto;
    min-height: 51px;

    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 140%;
    text-align: right;
    color: var(--neutral-900);

    background-color: var(--neutral-50) !important;
  }

  &.cell {
    box-sizing: border-box;

    width: calc(100vw * 1 / 7);
    min-width: 165px;
    height: auto;
    min-height: 51px;

    position: relative;
  }
`;

export const CalendarEvent = styled.button`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 4px 6px;
  gap: 10px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: calc(100% - 4px);
  height: 45px;

  background: var(--neutral-500);
  border-color: var(--neutral-500);
  border-radius: 6px;

  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 140%;

  color: var(--neutral-0);
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background: var(--neutral-300);
    border-color: var(--neutral-300);
    color: var(--neutral-900);
  }

  @media (hover: none), (pointer: coarse) {
    transition: none;

    &:hover,
    &:focus {
      background: var(--neutral-500);
      border-color: var(--neutral-500);
      color: var(--neutral-0);
    }

    &:active {
      background: var(--neutral-300);
      border-color: var(--neutral-300);
      color: var(--neutral-900);
    }
  }
`;
