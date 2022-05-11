import React, { useState } from 'react';
import { Meta } from '@storybook/react';

import {SwitchBtn} from '../src/switchBtn/switchBtn';

export default {
  component: SwitchBtn,
  title: 'Components/Switch',
  argTypes: {
    //   ghost: {
    //     control: { type: 'boolean' },
    //   },
    //   gradient: {
    //     control: { type: 'boolean' },
    //   },
    //   children: {
    //     control: { type: 'text' },
    //   },
      // isChecked: {
      //   control: { type: 'boolean' },
      // },
  },
} as Meta;

export const switchBtn = (props) => {
  const [isChecked, setIChecked] = useState(true);
  return (
    <SwitchBtn
      labelOn={'فعال'}
      labelOff={'غیرفعال'}
      checked={isChecked}
      onChange={(e) => setIChecked(e.target.checked)}
    />
  );
};

switchBtn.args = {
  // placeholder: 'کد شعبه',
  // value: 'سعادت آباد',
  // isChecked: true
};
