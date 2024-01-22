import Button from './';
import type { Meta as MetaObj, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Button>;
type Meta = MetaObj<typeof Button>;

export const Solid: Story = {
  args: {
    variant: 'solid',
    children: 'Solid',
    disabled: false,
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline',
    disabled: false,
  },
};

export const SolidDisabled: Story = {
  args: {
    children: 'Disabled',
    disabled: true,
  },
};

export const OutlineDisabled: Story = {
  args: {
    variant: 'outline',
    children: 'Disabled',
    disabled: true,
  },
};

export const SolidFocus: Story = {
  args: {
    variant: 'solid',
    children: 'Focus',
    autoFocus: true,
    disabled: false,
  },
};

export const OutlineFocus: Story = {
  args: {
    variant: 'outline',
    children: 'Focus',
    autoFocus: true,
    disabled: false,
  },
};

export default { component: Button } as Meta;
