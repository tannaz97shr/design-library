import React from 'react';

import Styles from './styled';
import { SelectBackdropProps } from './type';
const { SelectBackdrop } = Styles;

const backdrop = (props: SelectBackdropProps) =>
  props.show ? (
    <SelectBackdrop
      onClick={() => props.clicked && props.clicked()}
    ></SelectBackdrop>
  ) : null;

export default backdrop;
