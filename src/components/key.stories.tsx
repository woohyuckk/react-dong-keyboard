import type { Meta, StoryObj } from '@storybook/react';
import Key from './key';

const meta: Meta<typeof Key> = {
  title: 'Components/Key',
  component: Key,
  argTypes: {
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    design: { control: 'radio', options: ['light', 'dark', 'mechanical'] },
    state: { control: 'radio', options: ['default', 'pressed', 'disabled'] },
    children: { control: 'text' }
  },
  args: {
    children: 'Space',
    size: 'md',
    design: 'light',
    state: 'default'
  }
};
export default meta;

type Story = StoryObj<typeof Key>;

export const Default: Story = {};

export const Pressed: Story = {
  args: { state: 'pressed', children: 'Space' }
};

export const Disabled: Story = {
  args: { state: 'disabled', children: 'Space' }
};
