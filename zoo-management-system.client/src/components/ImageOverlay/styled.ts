import { Tooltip } from 'react-bootstrap';
import styled from 'styled-components';

export const Image = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 4px;
  object-fit: cover;
`;

export const StyledTooltip = styled(Tooltip)`
  background-color: var(--neutral-50) !important;
`;
