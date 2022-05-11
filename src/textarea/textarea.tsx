import React from 'react';
import { TeaxtareaProps } from './types';
import { TextareaWrapper } from './styled';

export const Textarea = (props: TeaxtareaProps) => {
  return (
    <TextareaWrapper error={props.error}>
      <textarea {...props} />
      {props.error ? <span>{props.error.message}</span> : null}
    </TextareaWrapper>
  );
};
