import type { Meta, StoryObj } from '@storybook/react'

import { NotFoundPage } from './NotFoundPage'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator'

const meta: Meta<typeof NotFoundPage> = {
  title: 'Page/NotFound',
  component: NotFoundPage
}

export default meta
type Story = StoryObj<typeof NotFoundPage>

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
