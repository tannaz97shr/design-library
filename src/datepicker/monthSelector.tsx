import React from 'react';
import dayjs from 'dayjs';
import jalaliday from 'jalaliday';

import { MonthSelectorProps } from './type';
import { monthNames } from './consts';
import Styles from './styled';

const monthSelector = (props: MonthSelectorProps) => {
  const { MonthSelectorWrapper, StyledMonthSelectorItem } = Styles;
  dayjs.extend(jalaliday);
  const selectedDateDayjs = props.selectedDate;
  const indexOfSelectedMonth = selectedDateDayjs.month();
  return (
    <MonthSelectorWrapper>
      {monthNames.map((month, i) => (
        <StyledMonthSelectorItem
          onClick={() => {
            props.dateChangeHandler(selectedDateDayjs.month(i));
            props.changeModalModeHandler("date")
          }}
          isSelected={indexOfSelectedMonth === i}
          key={month}
        >
          {month}
        </StyledMonthSelectorItem>
      ))}
    </MonthSelectorWrapper>
  );
};

export default monthSelector;
