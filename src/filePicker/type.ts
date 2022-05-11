import { InputHTMLAttributes } from 'react';
import { IError } from '../types';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  filePickerRef: React.LegacyRef<HTMLInputElement>;
  error?: IError | undefined;
  buttonTitle: JSX.Element | string;
  isLoading?:boolean;
  ghost?:boolean;
  gradient?:boolean;
}
