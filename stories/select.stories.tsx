import React from 'react';
import { Meta } from '@storybook/react';

import { Select } from '../src/select/select';

export default {
  component: Select,
  title: 'Components/Select',
  argTypes: {
    searchMode: { type: 'boolean' },
  },
} as Meta;

const options = [
  {title: 'title #1', value: 'value #1'},
  {title: 'title #2', value: 'value #2'},
  {title: 'title #3', value: 'value #3'},
  {title: 'title #4', value: 'value #4'},
  {title: 'title #5', value: 'value #5'}
];

export const MySelectInput = (props) => <Select  {...props} />;

MySelectInput.args = {
  searchMode: true,
  options
};
