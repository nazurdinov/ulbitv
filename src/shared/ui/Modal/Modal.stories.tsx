import type { Meta, StoryObj } from '@storybook/react'

import { Modal } from './Modal'

const meta: Meta<typeof Modal> = {
  title: 'Shared/Modal',
  component: Modal

}

export default meta
type Story = StoryObj<typeof Modal>

export const Default: Story = {
  args: {
    children: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse fugiat deserunt illum, consequuntur consectetur numquam, ad vero velit aperiam voluptatum neque obcaecati illo repellat aliquid asperiores praesentium natus voluptas ut?'
  }
}
