import type { Meta, StoryObj } from '@storybook/react'

import { Sidebar } from './Sidebar'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator'

const meta: Meta<typeof Sidebar> = {
  title: 'Widget/Sidebar',
  component: Sidebar
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
