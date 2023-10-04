// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import { Button, ThemeButton } from './Button';
import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof Button> = {
  title: 'Shared/Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;
 

export const Clear: Story = {
  args: {
    theme: ThemeButton.CLEAR,
    children: 'Button',
  },
};

export const Outlined: Story = {
  args: {
    theme: ThemeButton.OUTLINED,
    children: 'Button',
  },
  decorators:  [
    ThemeDecorator(Theme.DARK)
  ],
};