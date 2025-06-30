import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { MemoBox } from './memo-box';

const meta = {
  title: 'example/test-component',
  component: MemoBox,
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof MemoBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    Primary: true,
    label: 'MemoBox'
  }
};
