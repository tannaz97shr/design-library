import React from 'react';
import { LabelProps } from './type';
import LabelStyled from './styled';

export const Label = (props: LabelProps) => {
  const { LabelWrapper } = LabelStyled;

  return (
    <LabelWrapper mode={props.mode}>
      <div>{props.children}</div>
    </LabelWrapper>
  );
};
