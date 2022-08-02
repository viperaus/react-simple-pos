import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const LogoutPage = ({ setAuthenticated }) => {
  useEffect(() => {
    localStorage.removeItem('prefillData')
    setAuthenticated(false)
  }, [])

  return (
    <>
      <p>You have been logged out</p>
      <p>
        Return to the <Link to="/login">Log In</Link> page
      </p>
    </>
  )
}

export default LogoutPage
