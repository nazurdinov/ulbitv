import type { Meta, StoryObj } from '@storybook/react'

import { Sidebar } from './Sidebar'
import { Theme } from 'app/providers/ThemeProvider'
import { RouterDecorator } from 'shared/config/storybook/decorators/RouterDecorator/RouterDecorator'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator'

const meta: Meta<typeof Sidebar> = {
  title: 'Widget/Sidebar',
  component: Sidebar,
  decorators: [
    RouterDecorator
  ]
}

export default meta
type Story = StoryObj<typeof Sidebar>

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
