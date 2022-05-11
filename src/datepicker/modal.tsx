import React from 'react';

import Styled from './styled';
import { DatepickerModalProps } from './type';
import Backdrop from './backdrop';

const SelectModal = (props: DatepickerModalProps) => {
  const { StyledDatepickerModal } = Styled;
  return (
    <>
    <Backdrop show={props.show} clicked={props.modalClosed} />
      <StyledDatepickerModal show={props.show}>
        {props.children}
      </StyledDatepickerModal>
    </>
  );
};

export default SelectModal;
