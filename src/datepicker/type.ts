import { Dayjs } from 'dayjs';
import { InputHTMLAttributes } from 'react';
import { IError } from '../types';


export interface DatepickerProps {
  onChange:(selectedDate:Date)=>void;
  defaultValue?:Date;
  value?:Date;
  error?: IError | undefined;

}

export interface DatepickerWrapperProps {
  show?: boolean;
}
export interface DatepickerModalProps {
  children?: any;
  show: boolean;
  modalClosed?: Function;
}

export interface StyledDatepickertModalProps {
  show: boolean;
}

export interface DatepickerBackdropProps {
  clicked?: Function;
  show: boolean;
}

export interface DaySelectorProps {
  selectedDate: Dayjs;
  dateChangeHandler: Function;
  goToPreviousMonth: () => void;
  goToNextMonth: () => void;
  changeModalModeHandler: Function;
}

export interface StyledArrowProps {
  left?: boolean;
}

export interface DaySelectorDayItemProps {
  isHeader?: boolean;
  isCurrentMonth?: boolean;
  isSelected?: boolean;
}

export interface MonthSelectorProps {
  selectedDate: Dayjs;
  changeModalModeHandler: Function;
  dateChangeHandler: Function;
}

export interface StyledMonthSelectorItemProps {
  isSelected?: boolean;
}

export interface YearSelectorProps {
  changeModalModeHandler: Function;
  dateChangeHandler: Function;
  selectedDate: Dayjs;
}

export interface StyledYearSelectorItemProps {
  isSelected: boolean;
}

export type ModalMods = 'date' | 'month' | 'year';
