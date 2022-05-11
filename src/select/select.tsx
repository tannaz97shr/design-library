import React, { useState } from 'react';

import { SelectProps } from './type';
import SelectStyles from './styled';
import Modal from './modal';
import CaretDownIcon from '../assets/icon/caret.svg';

export const Select = (props: SelectProps) => {
  const {
    SelectWrapper,
    StyledSelectInput,
    SvgWrapper,
    StyledOption,
    StyledSelectDiv,
  } = SelectStyles;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectValue, setSelectValue] = useState(props.options[0]);

  const modalCloseHandler = () => {
    setIsModalOpen(false);
  };

  return (
    <SelectWrapper onBlur={props.onBlur}>
      <SvgWrapper show={isModalOpen}>
        <img src={CaretDownIcon} />
      </SvgWrapper>
      {props.searchMode ? (
        <StyledSelectInput
          placeholder={selectValue.title}
          onClick={() => setIsModalOpen(true)}
          onChange={(e) => props.onSearch && props.onSearch(e.target.value)}
        />
      ) : (
        <StyledSelectDiv onClick={() => setIsModalOpen(true)}>
          {selectValue.title}
        </StyledSelectDiv>
      )}
      <Modal show={isModalOpen} modalClosed={modalCloseHandler}>
        {props.options.map((option) => (
          <StyledOption
            key={option.title}
            onClick={() => {
              setSelectValue(option);
              setIsModalOpen(false);
              props.onChange && props.onChange(option.value);
            }}
          >
            {option.title}
          </StyledOption>
        ))}
      </Modal>
    </SelectWrapper>
  );
};
