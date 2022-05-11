import React from 'react';
import { Meta } from '@storybook/react';

import {Datepicker} from '../src/datepicker/datepicker';

export default {
  component: Datepicker,
  title: 'Components/Datepicker',
  argType: {},
} as Meta;
export const TestDatepicker = (props) => {
return <Datepicker onChange={e=>console.log(e.valueOf(),"123")} {...props} />
}
