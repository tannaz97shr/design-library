import React, { useState } from 'react';
import { Meta } from '@storybook/react';

import {Input} from '../src/input/input';

export default {
  component: Input,
  title: 'Components/Input',
  argTypes: {
    placeholder: {
      control: { type: 'text' },
    },
    value: {
      control: { type: 'text' },
    },
    error: {
        control: { type:'text' }
    }
  },
} as Meta;

export const text = (props) => {
  const [value, setValue] = useState(props.value);
  return (
    <Input
      placeholder={props.placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      error={{message: props.error}}
    />
  );
};

text.args = {
  placeholder: 'کد شعبه',
  value: 'سعادت آباد',
};
