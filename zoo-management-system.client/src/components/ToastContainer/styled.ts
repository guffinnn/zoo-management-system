import { Toast } from 'react-bootstrap';
import styled from 'styled-components';

export const StyledToast = styled(Toast)`
  box-shadow:  0 13px 20px 0 #b6c1ca30;);
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
