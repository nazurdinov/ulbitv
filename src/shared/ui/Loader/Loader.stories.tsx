import type { Meta, StoryObj } from '@storybook/react';

import { Loader } from './Loader';
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator";
import { RouterDecorator } from 'shared/config/storybook/decorators/RouterDecorator/RouterDecorator';

const meta: Meta<typeof Loader> = {
  title: 'Shared/Loader',
  component: Loader,
  
};

export default meta;
type Story = StoryObj<typeof Loader>;
 

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
