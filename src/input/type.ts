import { InputHTMLAttributes } from 'react';
import { IError } from '../types';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  ref?: React.LegacyRef<HTMLInputElement>;
  error?: IError | undefined;
}
