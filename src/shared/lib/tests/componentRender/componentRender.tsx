import { render } from '@testing-library/react'
import { type ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import { MemoryRouter } from 'react-router-dom'
import i18nTest from 'shared/config/i18n/i18nTest'

export function renderWithTranslations (component: ReactNode) {
  return render(
    <MemoryRouter>
    <I18nextProvider i18n={i18nTest}>
    {component}
  </I18nextProvider>
  </MemoryRouter>
  )
}
