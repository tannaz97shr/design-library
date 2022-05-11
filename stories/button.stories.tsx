import React from 'react';
import { Meta } from '@storybook/react';

import { Button } from '../src/button/button';

export default {
  component: Button,
  title: 'Components/Button',
  argTypes: {
    ghost: {
      control: { type: 'boolean' },
    },
    gradient: {
      control: { type: 'boolean' },
    },
    children: {
      control: { type: 'text' },
    },
    isLoading: {
      control: { type: 'boolean' },
    },
  },
} as Meta;
export const Primary = ({ children, ...props }) => (
  <Button {...props}>{children}</Button>
);
Primary.args = {
  ghost: false,
  gradient: false,
  children: 'تست',
  isLoading: false,
};
