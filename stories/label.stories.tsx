import React from 'react';

import { Meta } from '@storybook/react';

import { Label } from '../src/label/label';
export default {
  component: Label,
  title: 'Components/Label',
} as Meta;

export const Active = () => <Label mode="active">فعال</Label>;
export const Deactive = () => <Label mode= "deactive">غیرفعال</Label>