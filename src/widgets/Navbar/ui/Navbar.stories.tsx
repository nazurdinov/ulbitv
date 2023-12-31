import type { Meta, StoryObj } from '@storybook/react'

import { Navbar } from './Navbar'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator'
import { RouterDecorator } from 'shared/config/storybook/decorators/RouterDecorator/RouterDecorator'
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator/StoreDecorator'

const meta: Meta<typeof Navbar> = {
  title: 'Widget/Navbar',
  component: Navbar,
  decorators: [
    RouterDecorator,
    StoreDecorator
  ]
}

export default meta
type Story = StoryObj<typeof Navbar>

export const Dark: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK)
  ]
}

export const Light: Story = {
  decorators: [
    ThemeDecorator(Theme.LIGTH)
  ]
}
