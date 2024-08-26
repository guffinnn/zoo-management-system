import styled from 'styled-components';

export const Theading = styled.th`
  height: fit-content;
  min-height: 70px;
  border-bottom: 1px solid var(--neutral-400);
  background: var(--neutral-0);

  &.time {
    min-height: 71.4px;
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 8px;
    gap: 10px;

    width: auto;
    min-width: 80px;

    background-color: var(--neutral-50);
    border-bottom: 1px solid var(--neutral-400);
  }

  &.head__cell {
    background: var(--neutral-0);
    border-bottom: 1px solid var(--neutral-400);
    border-right: 1px solid var(--neutral-200);
  }

  &.head__cell:nth-last-child(-n + 1) {
    border-right: none;
  }
`;

export const HeadCellContent = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 140%;
  text-align: left;

  color: #181d25;
`;

export const CellContent = styled.p`
  width: 140px;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 140%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: justify;
  color: var(--neutral-900);
`;

export const TimeCellContent = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 140%;
  text-align: right;

  color: var(--neutral-600);
`;
