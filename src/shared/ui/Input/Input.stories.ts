import type { Meta, StoryObj } from '@storybook/react'

import { Input } from './Input'

const meta: Meta<typeof Input> = {
  title: 'Shared/Input',
  component: Input

}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    value: '',
    placeholder: 'test...',
    label: 'Test:',
    autofocus: true
  }
}
