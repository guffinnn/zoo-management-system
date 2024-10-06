import { Toast } from 'react-bootstrap';
import styled from 'styled-components';

export const StyledToast = styled(Toast)<{ show: boolean }>`
  box-shadow: 0 13px 20px 0 #b6c1ca30;
  opacity: ${({ show }) => `${show ? 1 : 0}`};
  transition: opacity 0.35s ease-in-out;
`;

export const StyledToastHeader = styled(Toast.Header)`
  color: var(--neutral-900);
  background-color: var(--neutral-50);

  & small {
    color: var(--neutral-900);
  }

  & button:focus {
    box-shadow: none;
  }
`;

export const StyledToastBody = styled(Toast.Body)``;
