import { FormControl } from 'react-bootstrap';
import styled from 'styled-components';

export const StyledInput = styled(FormControl)`
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

export const StyledInputWrapper = styled.div<{ error: string }>`
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
