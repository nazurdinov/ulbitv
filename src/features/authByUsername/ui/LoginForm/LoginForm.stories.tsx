// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react'

import { LoginForm } from './LoginForm'

const meta: Meta<typeof LoginForm> = {
  title: 'Features/LoginForm',
  component: LoginForm
}

export default meta
type Story = StoryObj<typeof LoginForm>

export const Default: Story = {
  args: {
  }
}
