import styled from 'styled-components/macro';
// import { opacify } from 'polished';
import { colorToRgba } from '../utilities/utilities';

import {
  DatepickerWrapperProps,
  StyledDatepickertModalProps,
  StyledArrowProps,
  StyledMonthSelectorItemProps,
  StyledYearSelectorItemProps
} from './type';
import { DefaultTheme } from '../theme/theme';
import { DaySelectorDayItemProps } from './type';

const StyledDatepickerWrapper = styled.div`
  direction: rtl;
  display: flex;
  flex-direction: column;
  position: relative;
  box-sizing: border-box;
  /* temp */
  max-width: 300px;
`;

const StyledDatepickerInput = styled.div`
  height: 2.5em;
  padding: 6px 12px 7.1px 8px;
  border-radius: 4px;
  border: none;
  box-shadow: 0 0.187em 0.375em 0 rgba(0, 0, 0, 0.12);
  z-index: 20;
  direction: rtl;
  display: flex;
  justify-content: start;
  align-items: center;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;
const SvgWrapper = styled.div<DatepickerWrapperProps>`
  position: absolute;
  width: 0.5em;
  height: 0.5em;
  z-index: 22;
  top: 1.25rem;
  left: 1em;
  z-index: 25;
  display: flex;
  transform: ${({ show }) => (show ? `rotate(180deg)` : `rotate(0deg)`)};
  svg {
    fill: ${DefaultTheme.primary};
  }
`;

const StyledDatepickerModal = styled.div<StyledDatepickertModalProps>`
  position: absolute;
  display: ${({ show }) => (show ? `flex` : 'none')};
  flex-direction: column;
  left: 0;
  right: 0;
  top: 3.5em;
  z-index: 20;
  box-shadow: 0 0.187em 0.375em 0 rgba(0, 0, 0, 0.12);
`;

const StyledDatepickerBackdrop = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
`;
const DaySelectorDaysWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
`;
const DaySelectorDayItem = styled.div<DaySelectorDayItemProps>`
  background-color: ${({ isSelected }) =>
    isSelected ? DefaultTheme.primary : 'inherit'};

  width: 14.285714%;
  text-align: center;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  border-radius: 4px;
  font-weight: ${({ isHeader }) => (isHeader ? 'bold' : 'normal')};
  cursor: ${({ isHeader, isCurrentMonth }) =>
    isHeader || !isCurrentMonth ? 'auto' : 'pointer'};
  &:hover {
    background-color: ${({ isHeader, isCurrentMonth }) =>
      isHeader || !isCurrentMonth
        ? 'transparent'
        : colorToRgba(DefaultTheme.primary, 0.8)};
    color: ${({ isHeader, isCurrentMonth }) =>
      isCurrentMonth
        ? '#ffffff'
        : isHeader
        ? 'inherit'
        : DefaultTheme.deactive};
  }
  color: ${({ isHeader, isCurrentMonth, isSelected }) =>
    isCurrentMonth || isHeader
      ? isSelected
        ? DefaultTheme.secondary
        : 'inherit'
      : DefaultTheme.deactive};
`;

const StyledDatepickerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 1.5em;
  align-items: center;
  padding: 0.25em 0.5em;
  border-bottom: 1px solid ${DefaultTheme.deactive};
  color: ${DefaultTheme.gray};
`;

const StyledArrow = styled.div<StyledArrowProps>`
  display: flex;
  width: 0.7em;
  height: 0.7em;
  fill: ${DefaultTheme.deactive};
  cursor: pointer;
  &:hover {
    fill: ${DefaultTheme.primary};
  }
  transform: ${({ left }) => (left ? 'rotate(180deg)' : 'none')};
`;

const MonthSelectorWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0.5em;
`;

const StyledMonthSelectorItem = styled.div<StyledMonthSelectorItemProps>`
  display: flex;
  box-sizing: border-box;
  width: 33.3%;
  justify-content: center;
  padding: 0.5em;
  cursor: pointer;
  background-color: ${({ isSelected }) =>
    isSelected ? DefaultTheme.primary : 'inherit'};
  color: ${({ isSelected }) =>
    isSelected ? DefaultTheme.secondary : 'inherit'};
  &:hover {
    background-color: ${DefaultTheme.primary};
    color: ${DefaultTheme.secondary};
  }
`;
const StyledModeSelector = styled.div`
  display: flex;
  cursor: pointer;
  & div {
    &:hover {
      color: black;
    }
  }
`;

const YearSelectorWrapper = styled.div`
  direction: ltr;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const StyledYearSelectorItem = styled.div<StyledYearSelectorItemProps>`
  display: flex;
  width: 33%;
  cursor: pointer;
  padding: 0.5em 0 ;
  justify-content: center;
  background-color: ${({ isSelected }) =>
    isSelected ? DefaultTheme.primary : 'inherit'};
  color: ${({ isSelected }) =>
    isSelected ? DefaultTheme.secondary : 'inherit'};
  &:hover {
    background-color: ${DefaultTheme.primary};
    color: white;
  }
`;



export default {
  StyledDatepickerWrapper,
  StyledDatepickerModal,
  StyledDatepickerInput,
  SvgWrapper,
  StyledDatepickerBackdrop,
  DaySelectorDaysWrapper,
  DaySelectorDayItem,
  StyledDatepickerHeader,
  StyledArrow,
  MonthSelectorWrapper,
  StyledMonthSelectorItem,
  StyledModeSelector,
  YearSelectorWrapper,
  StyledYearSelectorItem,
  
};
