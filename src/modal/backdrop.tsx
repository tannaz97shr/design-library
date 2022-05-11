import React from 'react';

import ModalStyles from './styled';
import { BackdropProps } from './type';

const { StyledBackdrop } = ModalStyles;

const backdrop = (props: BackdropProps) =>
  props.show ? <StyledBackdrop onClick={() => props.clicked && props.clicked()} /> : null;


  export default backdrop;