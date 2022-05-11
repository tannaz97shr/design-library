import React from 'react';

import { StyledSpinner } from './style';
import { SpinnerProps } from './type';
export const Spinner = (props: SpinnerProps) => {
  const { SpinnerStyled, SpinnerWrapper } = StyledSpinner;
  return (
    <SpinnerWrapper {...props}>
      <SpinnerStyled {...props} />
    </SpinnerWrapper>
  );
};

