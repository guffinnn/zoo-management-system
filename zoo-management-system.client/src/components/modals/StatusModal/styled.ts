import styled from 'styled-components';

export const ModalContainer = styled.div`
  grid-row: 2 / 3;
  grid-column: 2 / 3;

  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 16px;

  width: 300px;
  height: fit-content;

  background: var(--neutral-0);
  border: 1px solid var(--neutral-400);
  box-shadow: 0 6px 12px #33333314;
  border-radius: 12px;
`;

export const StatusImageContainer = styled.div`
  position: relative;

  width: 56px;
  height: 56px;

  border-radius: 32px;

  &.error {
    background:
      url(../../../assets/error.svg) no-repeat center center,
      var(--danger-200);
    background-size: contain;
  }

  &.error::before {
    content: url(../../../assets/error.svg);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    object-fit: scale-down;
  }

  &.success {
    background:
      url(../../../assets/success.svg) no-repeat center center,
      var(--success-200);
    background-size: contain;
  }
`;

export const StatusImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;

  object-fit: scale-down;

  transform: translate(-50%, -50%);
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  gap: 8px;

  width: 100%;
  height: auto;
`;

export const StatusHeading = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 140%;
  text-align: center;

  color: var(--neutral-900);
`;

export const StatusInfo = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 140%;
  text-align: center;

  color: var(--neutral-700);
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 0;
  gap: 10px;

  width: 100%;
  height: 40px;
`;

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

  &:hover {
    background: var(--neutral-50);
  }

  &:active {
    background: var(--neutral-0);
    box-shadow: inset 0 4px 12px #0000001e;
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
