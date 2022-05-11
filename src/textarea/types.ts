import { TextareaHTMLAttributes } from 'react';
import { IError } from '../types';

export interface TeaxtareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  ref?: React.LegacyRef<HTMLTextAreaElement>;
  error?: IError | undefined;
}
