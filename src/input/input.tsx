import React from 'react';
import { InputProps } from './type';
import { InputWrapper } from './styled';

export const Input = (props: InputProps) => {
  return (
    <InputWrapper error={props.error} >
      <input {...props}/>
      {props.error ? <span>{props.error.message}</span>: null}
    </InputWrapper>
  );
};

