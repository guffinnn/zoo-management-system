import 'bootstrap/dist/css/bootstrap-utilities.min.css';

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
  height: fit-content;

  background: var(--neutral-0);
  border: 1px solid var(--neutral-200);
  box-shadow: 0 1px 2px #8080801e;
  border-radius: 8px;
`;

export const FormFrame = styled.div`
  width: 100%;
`;
