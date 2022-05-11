import React from 'react';
import dayjs from 'dayjs';
import jalaliday from 'jalaliday';

import Styled from './styled';
import { DaySelectorProps } from './type';
import ArrowRightSvg from '../assets/icon/arrow-right.svg';
import { monthNames, weekDays } from './consts';

const convertGregroianDayOfWeekToJalai = (dayOfWeek: number) =>
  dayOfWeek === 6 ? 0 : dayOfWeek + 1;

const DaySelector = (props: DaySelectorProps) => {
  const {
    DaySelectorDaysWrapper,
    DaySelectorDayItem,
    StyledDatepickerHeader,
    StyledArrow,
    StyledModeSelector
  } = Styled;
  dayjs.extend(jalaliday);
  const selectedDateDayjs = props.selectedDate;
  
  const firstDayOfMonth = dayjs(props.selectedDate).set('day', 1);
  const daysInSelectedMonth = selectedDateDayjs.daysInMonth();
  const lastDayOfMonth = dayjs(props.selectedDate).set(
    'day',
    daysInSelectedMonth
  );
  const prevMonthDays = dayjs(
    new Date(
      props.selectedDate.year(),
      props.selectedDate.month() - 1,
      props.selectedDate.date()
    )
  ).daysInMonth();

  return (
    <div>
      <StyledDatepickerHeader>
        <StyledArrow onClick={props.goToPreviousMonth}>
          <img src={ArrowRightSvg}/>
        </StyledArrow>
        <StyledModeSelector>
          <div onClick={() => props.changeModalModeHandler('month')}>
            {monthNames[selectedDateDayjs.month()]}
          </div>
          {' '}
          <div onClick={() => props.changeModalModeHandler('year')}>
            {selectedDateDayjs.year()}
          </div>
        </StyledModeSelector>
        <StyledArrow left onClick={props.goToNextMonth}>
          <img src={ArrowRightSvg}/>
        </StyledArrow>
      </StyledDatepickerHeader>
      <DaySelectorDaysWrapper>
        {weekDays.map((d, index) => (
          <DaySelectorDayItem isHeader key={index}>
            {d}
          </DaySelectorDayItem>
        ))}

        {firstDayOfMonth.day() !== 6 &&
          [...new Array(firstDayOfMonth.day() + 1)].map((_, index) => (
            <DaySelectorDayItem key={prevMonthDays - (firstDayOfMonth.day() - index)}>
              {prevMonthDays - (firstDayOfMonth.day() - index)}
            </DaySelectorDayItem>
          ))}

        {[...new Array(daysInSelectedMonth)].map((_, index) => (
          <DaySelectorDayItem
          key={index + 1}
            onClick={() => {
              props.dateChangeHandler(selectedDateDayjs.date(index + 1));
            }}
            isSelected={index + 1 === selectedDateDayjs.date()}
            isCurrentMonth
          >
            {index + 1}
          </DaySelectorDayItem>
        ))}

        {[
          ...new Array(
            6 - convertGregroianDayOfWeekToJalai(lastDayOfMonth.day())
          ),
        ].map((_, index) => (
          <DaySelectorDayItem key={index + 1} >{index + 1}</DaySelectorDayItem>
        ))}
      </DaySelectorDaysWrapper>
    </div>
  );
};
export default DaySelector;
