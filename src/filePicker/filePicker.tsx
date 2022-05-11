import React from 'react';
import { Spinner } from '../spinner/spinner';
import { FilePickerStyles } from './styled';
import { InputProps } from './type';

export const FilePicker = (props: InputProps) => {
  const {
    error,
    buttonTitle,
    ghost,
    gradient,
    isLoading,
    ...inputProps
  } = props;
  console.log(props.filePickerRef,"input props ref" );
  
  const { Label } = FilePickerStyles;
  const filePickerID = `${props.name}-file-picker`;
  return (
    <>
      <Label htmlFor={filePickerID} isLoading={isLoading} ghost={ghost}>
        <div className="context">
          {buttonTitle}
          <Spinner show={isLoading} />
        </div>
        <input type="file" {...inputProps} id={filePickerID} ref={props.filePickerRef} />
      </Label>
      {error ? <span>{error.message}</span> : null}
    </>
  );
};
