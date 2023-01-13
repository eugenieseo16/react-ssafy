import { ToggleButton } from './ToggleButton';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'components/ToggleButton',
  component: ToggleButton,
  args: { ...ToggleButton.defaultProps },
} satisfies Meta<typeof ToggleButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const InActive: Story = {
  args: {
    toggleOn: 1,
    toggleOff: 0,
  },
};

export const Active: Story = {
  args: {
    toggleOn: 1,
    toggleOff: 0,
    toggle: true,
  },
};

export const Disabled1: Story = {
  name: 'Disabled (Actived)',
  args: {
    toggleOn: 1,
    toggleOff: 0,
    toggle: true,
    disabled: true,
  },
};

export const Disabled2: Story = {
  name: 'Disabled (Inactived)',
  args: {
    toggleOn: 1,
    toggleOff: 0,
    disabled: true,
  },
};
