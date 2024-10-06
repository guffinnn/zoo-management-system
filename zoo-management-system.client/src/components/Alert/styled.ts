import { Alert } from 'react-bootstrap';
import styled from 'styled-components';

export const StyledAlert = styled(Alert)<{ show: boolean }>`
  position: fixed;
  grid-row: 1;
  grid-column: 2 / 3;
  width: 345px;
  justify-self: center;

  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 12px 8px 12px 12px;
  gap: 12px;

  background: var(--warning-100);
  border: none;
  border-left: 4px solid var(--warning-400);
  border-radius: 8px;
  transform: translate(0, ${({ show }) => `${show ? '20px' : '-100%'}`});
  opacity: ${({ show }) => `${show ? 1 : 0}`};
  transition:
    opacity 0.35s ease-in-out,
    transform 0.35s ease-in-out;

  & .container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
    gap: 4px;
    width: 280px;
    height: auto;

    flex: none;
    order: 1;
    flex-grow: 1;
  }
`;

export const Image = styled.img`
  width: 24px;
  height: 24px;

  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const StyledHeading = styled(Alert.Heading)`
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 140%;
  width: 280px;
  height: 21px;
  margin: 0;

  color: var(--neutral-900);
`;

export const Text = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 140%;
  width: 280px;
  height: 21px;

  color: var(--neutral-900);
`;
