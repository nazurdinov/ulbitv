import type { Meta, StoryObj } from '@storybook/react';

import { AppLink } from './AppLink';
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator";
import { RouterDecorator } from 'shared/config/storybook/decorators/RouterDecorator/RouterDecorator';

const meta: Meta<typeof AppLink> = {
  title: 'Shared/AppLink',
  component: AppLink,
  decorators:[
    RouterDecorator
  ],
  args: {
    children: 'Link',
    to: '/',
  },
};

export default meta;
type Story = StoryObj<typeof AppLink>;
 

export const Dark: Story = {
  decorators:  [
    ThemeDecorator(Theme.DARK)
  ],
};

export const Light: Story = {
  decorators:  [
    ThemeDecorator(Theme.LIGTH)
  ],
};
