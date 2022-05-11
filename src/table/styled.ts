import styled from 'styled-components/macro';

import { StyledPageSelectorProps, StyledArrowProps } from './type';
import { DefaultTheme } from '../theme/theme';

const StyledTable = styled.table`
  direction: rtl;
  width: 100%;
  border-collapse: collapse;
  text-align: right;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.05);
  td,
  th {
    padding: 0.5em;
  }
  thead {
    border-bottom: solid 1px #cdcdcd;
  }
  tr {
    &:nth-child(even) {
      background-color: #fbfbfb;
    }
  }
`;

const StyledPagination = styled.div`
  display: flex;
  direction: rtl;
  justify-content: flex-end;
  align-items: center;
  margin-top: 1em;
`;

const StyledPageSelector = styled.div`
  display: flex;
  direction: rtl;
  align-items: center;
`;

const StyledPageIndex = styled.div<StyledPageSelectorProps>`
  margin: 1em;
  cursor: ${({ isDots }) => (isDots ? 'inherit' : `pointer`)};
  color: ${({ isSelected }) =>
    isSelected ? DefaultTheme.primary : DefaultTheme.deactive};
`;
const StyledArrow = styled.div<StyledArrowProps>`
  width: 1em;
  height: 1em;
  fill: ${DefaultTheme.deactive};
  &:hover {
    fill: ${DefaultTheme.primary};
  }
  transform: ${({ left }) => (left ? 'rotate(180deg)' : 'none')};
`;

const StyledPageSituation = styled.div`
  margin: 2em;
  color: ${DefaultTheme.deactive};
`;

export default {
  StyledTable,
  StyledPagination,
  StyledPageSelector,
  StyledPageIndex,
  StyledArrow,
  StyledPageSituation,
};
