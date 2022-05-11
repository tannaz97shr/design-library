import React, { useState} from 'react';
import { Meta } from '@storybook/react';

import {Modal} from '../src/modal/modal';

export default {
  component: Modal,
  title: 'Components/Modal',
  argTypes: {
    show: {
      control: { type: 'boolean' },
    },
  },
} as Meta;

export const ModalTest = () => {
  const [isShowing, setIsShowing] = useState(false);
  return (
    <div>
      <Modal show={isShowing} modalClosed={() => setIsShowing(false)}></Modal>
      <button onClick={() => setIsShowing(true)}> open modal </button>
    </div>
  );
};
ModalTest.args = {
  show: true,
};
