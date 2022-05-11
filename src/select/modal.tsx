import React from 'react';

import Styled from './styled';
import { SelectModalProps } from './type';
import Backdrop from './backdrop';

const SelectModal = (props: SelectModalProps) => {
  const { StyledSelectModal } = Styled;
  return (
    <>
    <Backdrop show={props.show} clicked={props.modalClosed} />
      <StyledSelectModal show={props.show}>
        {props.children}
      </StyledSelectModal>
    </>
  );
};

export default SelectModal;
