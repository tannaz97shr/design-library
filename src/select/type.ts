export interface SelectProps {
  options: { title: string; value: string }[];
  searchMode?: boolean;
  onSearch?: (searchedValue: string) => void;
  onChange?: (value: string) => void;
  onBlur?: () => void;
}

export interface SelectWrapperProps {
  show?: boolean;
}

export interface SelectModalProps {
  children?: any;
  show: boolean;
  modalClosed?: Function;
}

export interface StyledSelectModalProps {
  show: boolean;
}

export interface SelectBackdropProps {
  clicked?: Function;
  show: boolean;
}

export interface OptionProps {
  isSelected?: boolean;
}
