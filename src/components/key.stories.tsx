import type { Meta, StoryObj } from '@storybook/react-vite';
import Key from './key';

const meta: Meta<typeof Key> = {
  title: 'Components/Key',
  component: Key,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg']
    },
    design: {
      control: 'radio',
      options: ['light', 'dark', 'mechanical']
    },
    state: {
      control: 'radio',
      options: ['default', 'pressed', 'disabled']
    },
    children: {
      control: 'text'
    }
  },
  args: {
    children: 'A',
    size: 'md',
    design: 'light',
    state: 'default'
  }
};
export default meta;

type Story = StoryObj<typeof Key>;

export const Default: Story = {};

export const AllSizes: Story = {
  render: (args) => (
    <div className="flex gap-4">
      <Key {...args} size="sm">
        S
      </Key>
      <Key {...args} size="md">
        M
      </Key>
      <Key {...args} size="lg">
        L
      </Key>
    </div>
  )
};

export const AllDesigns: Story = {
  render: (args) => (
    <div className="flex gap-4">
      <Key {...args} design="light">
        Light
      </Key>
      <Key {...args} design="dark">
        Dark
      </Key>
      <Key {...args} design="mechanical">
        Mech
      </Key>
    </div>
  )
};

export const AllStates: Story = {
  render: (args) => (
    <div className="flex gap-4">
      <Key {...args} state="default">
        Default
      </Key>
      <Key {...args} state="pressed">
        Pressed
      </Key>
      <Key {...args} state="disabled">
        Disabled
      </Key>
    </div>
  )
};
