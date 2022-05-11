import React, { useState } from 'react';
import { Meta } from '@storybook/react';

import {FilePicker} from '../src/filePicker/filePicker';

export default {
  component: FilePicker,
  title: 'Components/FilePicker',

} as Meta;

export const text = (props) => {
  return (
    <FilePicker
      placeholder={props.placeholder}
      error={{message: props.error}}
      {...props}

    />
  );
};

text.args = {
  placeholder: 'کد شعبه',
  buttonTitle: 'انتخاب فایل'
};
