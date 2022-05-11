import React, { useEffect, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import jalaliday from 'jalaliday';

import { DatepickerProps, ModalMods } from './type';
import Styles from './styled';
import Modal from './modal';
import CaretDownIcon from '../assets/icon/caret.svg';
import DaySelector from './daySelector';
import MonthSelector from './monthSelector';
import YearSelector from './yearSelector';
import { monthNames } from './consts';
const getDefaultSelectedDate = (value?: Date, defaultValue?: Date): Date => {
  if (defaultValue) return defaultValue;
  if (value) return value;
  return new Date();
};
const convertDateToDayJsJalali = (date: Date): Dayjs => {
  return dayjs(date).calendar('jalali');
};
export const Datepicker = (props: DatepickerProps) => {
  dayjs.extend(jalaliday);
  const { StyledDatepickerWrapper, StyledDatepickerInput, SvgWrapper } = Styles;
  const [modalMode, setModalMode] = useState<ModalMods>('date');
  const [selectedJalaliDate, setSelectedJalaliDate] = useState(
    convertDateToDayJsJalali(
      getDefaultSelectedDate(props.value, props.defaultValue)
    )
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    props.onChange(selectedJalaliDate.toDate());
  }, [selectedJalaliDate]);
  useEffect(() => {
    if (props.value)
      setSelectedJalaliDate(convertDateToDayJsJalali(props.value));
  }, [props.value]);

  const changeMonth = (changeInterval: number) => {
    setSelectedJalaliDate((_currentDate) => {
      const currentDay = _currentDate.date();
      const gregorianCurrentDate = _currentDate.toDate();
      gregorianCurrentDate.setMonth(
        gregorianCurrentDate.getMonth() + changeInterval
      );
      const changedDate = dayjs(gregorianCurrentDate)
        .calendar('jalali')
        .set('date', currentDay);
      return changedDate;
    });
  };
  const modalCloseHandler = () => {
    setIsModalOpen(false);
  };
  const jalaliDateChangeHandler = (date: Dayjs) => {
    setSelectedJalaliDate(date);
  };
  const changeModalModeHandler = (mode: ModalMods) => {
    setModalMode(mode);
  };

  return (
    <StyledDatepickerWrapper>
      <SvgWrapper show={isModalOpen}>
        <img src={CaretDownIcon}/>
      </SvgWrapper>
      <StyledDatepickerInput onClick={() => setIsModalOpen(true)}>
        {selectedJalaliDate.date()} / {monthNames[selectedJalaliDate.month()]} / 
        &nbsp;{selectedJalaliDate.year()}
      </StyledDatepickerInput>

      <Modal show={isModalOpen} modalClosed={modalCloseHandler}>
        {modalMode === 'date' ? (
          <DaySelector
            changeModalModeHandler={changeModalModeHandler}
            dateChangeHandler={jalaliDateChangeHandler}
            goToNextMonth={() => changeMonth(1)}
            goToPreviousMonth={() => changeMonth(-1)}
            selectedDate={selectedJalaliDate}
          />
        ) : modalMode === 'month' ? (
          <MonthSelector
            changeModalModeHandler={changeModalModeHandler}
            dateChangeHandler={jalaliDateChangeHandler}
            selectedDate={selectedJalaliDate}
          />
        ) : (
          <YearSelector
            changeModalModeHandler={changeModalModeHandler}
            dateChangeHandler={jalaliDateChangeHandler}
            selectedDate={selectedJalaliDate}
          />
        )}
      </Modal>
    </StyledDatepickerWrapper>
  );
};

