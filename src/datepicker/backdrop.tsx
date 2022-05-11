import React from 'react';

import Styles from './styled';
import { DatepickerBackdropProps } from './type';
const { StyledDatepickerBackdrop } = Styles;

const backdrop = (props: DatepickerBackdropProps) =>
  props.show ? (
    <StyledDatepickerBackdrop
      onClick={() => props.clicked && props.clicked()}
    ></StyledDatepickerBackdrop>
  ) : null;

export default backdrop;
