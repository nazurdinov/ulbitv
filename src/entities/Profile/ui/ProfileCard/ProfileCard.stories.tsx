import type { Meta, StoryObj } from '@storybook/react'

import { ProfileCard } from './ProfileCard'
import { Country } from 'shared/const/common'
import { Currency } from 'entities/Currency'

const meta: Meta<typeof ProfileCard> = {
  title: 'Entities/ProfileCard',
  component: ProfileCard
}

export default meta
type Story = StoryObj<typeof ProfileCard>

export const Default: Story = {
  args: {
    formData: {
      firstname: 'Sam',
      lastname: 'Naz',
      city: 'Dushanbe',
      username: 'nazurdino',
      country: Country.TAJIKISTAN,
      currency: Currency.RUB,
      avatar: 'https://miro.medium.com/v2/resize:fit:640/0*ngAthWxOvKZHvsw9',
      age: 33
    },
    isLoading: false,
    isEdit: true
  }
}
