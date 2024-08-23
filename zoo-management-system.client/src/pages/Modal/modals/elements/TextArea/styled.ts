import styled from 'styled-components';

export const TextAreaContainer = styled.div`
  position: relative;
  min-width: fit-content;
  height: fit-content;
  width: 100%;
  margin-top: -20px;

  &::after {
    box-sizing: border-box;
    content: url('../../../../../assets/resizer.svg');
    position: absolute;
    bottom: 14px;
    right: 4px;
    width: 8px;
    height: 8px;
    object-fit: fill;
    pointer-events: none;
    z-index: 10;
  }
`;

export const StyledTextArea = styled.textarea`
  box-shadow: none;

  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 10px;
  gap: 8px;

  width: 100%;
  height: 85px;

  background: var(--neutral-0);
  border: 1px solid var(--neutral-200);
  border-radius: 8px;

  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;

  color: var(--neutral-900);

  transition: border 0.1s ease;

  &:focus {
    border: 2px solid var(--primary-500);
  }
`;
