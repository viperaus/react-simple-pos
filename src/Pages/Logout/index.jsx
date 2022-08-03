import { useEffect } from 'react'

import LogoutForm from '../../Components/LogoutForm'

const LogoutPage = ({ setAuthenticated }) => {
  useEffect(() => {
    localStorage.removeItem('prefillData')
    setAuthenticated(false)
  }, [])

  return <LogoutForm />
}

export default LogoutPage
