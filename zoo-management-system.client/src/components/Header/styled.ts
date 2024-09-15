import { Dropdown, DropdownToggle } from 'react-bootstrap';
import styled from 'styled-components';

export const StyledDropdown = styled(Dropdown)``;

export const StyledDropdownToggle = styled(DropdownToggle)`
  padding: 8px;
  gap: 8px;

  width: 40px;
  height: 40px;

  background: var(--neutral-0);
  border: 1px solid var(--neutral-200);
  /* Btn-effect */
  box-shadow:
    inset 0 7px 12px #ffffff14,
    inset 0 -2px 2px #30303019;
  border-radius: 8px;

  cursor: pointer;

  transition: box-shadow 0.1s ease;

  &:hover {
    background: var(--neutral-0);
    border: 1px solid var(--neutral-200);
    /* Btn-effect */
    box-shadow:
      inset 0 7px 12px #ffffff14,
      inset 0 -2px 2px #30303019;
  }

  &:active,
  &.show,
  &:first-child:active {
    background-color: var(--neutral-0);
    border: 1px solid var(--neutral-200);
    /* Btn-effect */
    box-shadow: inset 0 4px 12px #0000001e;
  }

  &::after {
    content: none !important;
  }
`;

export const SearchParamsMenu = styled(Dropdown.Menu)`
  padding: 4px;

  width: auto;
  height: auto;

  background: #e2e2e2;
  border: 1px solid #bababa;
  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.16),
    inset 0 0 0 rgba(255, 255, 255, 0.5);
  border-radius: 8px;
`;

export const SearchParamsItem = styled(Dropdown.Item)`
  background: rgba(255, 255, 255, 0);
  border-radius: 6px;
  margin-top: 4px;

  /* Inside auto layout */
  flex: none;
  order: 5;
  align-self: stretch;
  flex-grow: 0;
  transition: background 0.3s ease-in-out;

  &:nth-child(1) {
    margin-top: 0;
  }

  &:hover {
    background: #00000014;
  }

  &:focus {
    background: rgba(255, 255, 255, 0);
  }

  &:active,
  &.active {
    transition: none;
    background: var(--primary-500);
  }
`;

export const StyledDivider = styled(Dropdown.Divider)``;
