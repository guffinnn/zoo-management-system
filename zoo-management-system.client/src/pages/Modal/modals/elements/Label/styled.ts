import { FormLabel } from 'react-bootstrap';
import styled from 'styled-components';

export const StyledLabel = styled(FormLabel)`
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
