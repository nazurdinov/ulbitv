import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'

function Bugbutton () {
  const [isError, setisError] = useState(false)
  const crashApp = () => { setisError(true) }

  useEffect(() => {
    if (isError) { throw new Error('Error') }
  }, [isError])
  return <button onClick={crashApp}>Crash the app</button>
}
function HomePage (): JSX.Element {
  const { t } = useTranslation(['home'])

  return (
      <><Bugbutton />
      <div>{t('Home page')}</div></>
  )
}

export default HomePage
