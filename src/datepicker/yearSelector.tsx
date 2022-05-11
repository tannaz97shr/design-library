import React, { useState } from 'react';
import dayjs from 'dayjs';
import jalaliday from 'jalaliday';

import Styles from './styled';
import { YearSelectorProps } from './type';
import ArrowRightSvg from '../assets/icon/arrow-right.svg';

const YearSelector = (props: YearSelectorProps) => {
  dayjs.extend(jalaliday);
  const {
    YearSelectorWrapper,
    StyledModeSelector,
    StyledYearSelectorItem,
    StyledDatepickerHeader,
    StyledArrow,
  } = Styles;
  const currentDate = dayjs(new Date()).calendar('jalali');
  const x = currentDate.year() - props.selectedDate.year();
  const [startingYear, setStartingYear] = useState(
    x > 5 ? (props.selectedDate.year() - 6) : (props.selectedDate.year() - (11-x))
  );
  return (
    <>
      <StyledDatepickerHeader>
        <StyledArrow
        onClick={() => setStartingYear(startingYear + 12)}
        >
          <img src={ArrowRightSvg}/>
        </StyledArrow>
        <StyledModeSelector>
          {startingYear} - {startingYear+12}
        </StyledModeSelector>
        <StyledArrow
          left
          onClick={() => setStartingYear(startingYear - 12)}
        >
          <img src={ArrowRightSvg}/>
        </StyledArrow>
      </StyledDatepickerHeader>
      <YearSelectorWrapper>
        {[...new Array(12)].map(
          (_, index) => (
            <StyledYearSelectorItem
            key={index + startingYear}
              isSelected={props.selectedDate.year() === index + startingYear}
              onClick={() => {
                props.dateChangeHandler(
                  props.selectedDate.year(index + startingYear)
                );
                props.changeModalModeHandler('date');
              }}
            >
              {index + startingYear}
            </StyledYearSelectorItem>
          )
        )}
      </YearSelectorWrapper>
    </>
  );
};

export default YearSelector;
