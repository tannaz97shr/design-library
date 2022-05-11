import React from 'react';

import { ModalProps } from './type';
import ModalStyles from './styled';
import Backdrop from './backdrop';

export const Modal = (props: ModalProps) => {
  const { StyledModal, ModalWrapper } = ModalStyles;
  console.log(" modal components props : ", props);
  return (
    <ModalWrapper>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <StyledModal show={props.show}
      > {props.children}</StyledModal>
    </ModalWrapper>
  );
};

