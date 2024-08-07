import styled from 'styled-components';

export const CalendarHeaderLayout = styled.div`
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: auto;
  height: 40px;

  margin: 12px 20px 0 20px;
`;

export const TodayInfo = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 140%;
  color: var(--neutral-900);
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2px 1px;

  margin-left: auto;
  width: 260px;
  height: 40px;

  background: var(--neutral-100);
  border-radius: 8px;

  flex: none;
  order: 1;
  flex-grow: 0;

  @media (max-width: 720px) {
    display: none;
  }
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  gap: 6px;

  width: 78px;
  height: 38px;

  border-radius: 8px;

  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 140%;
  text-align: center;

  color: var(--neutral-700);

  flex: none;
  order: 0;
  flex-grow: 0;

  cursor: pointer;

  &.--primary {
    width: 95px;

    background: var(--neutral-0);
    border: 1px solid var(--neutral-400);

    color: var(--neutral-900);
    cursor: default;
  }
`;
