import React from 'react';

import { ButtonProps } from './type';
import ButtonStyles from './styled';
import {Spinner} from '../spinner/spinner';

export const Button = (props: ButtonProps) => {
  const { ButtonWrapper } = ButtonStyles;
  const { children, isLoading,onClick, ...attributes } = props;

  return (
    <ButtonWrapper {...attributes} isLoading={isLoading}>
      {/* <button><Spinner show={props.isLoading} /> <div>{children}</div></button> */}
      <button onClick={onClick} disabled={isLoading}>
        <div className="context">
          {children}
          <Spinner show={props.isLoading} />
        </div>
      </button>
    </ButtonWrapper>
  );
};
