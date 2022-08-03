import React from 'react'
import { Link } from 'react-router-dom'

export default function LogoutForm() {
  return (
    <>
      <p>You have been logged out</p>
      <p>
        Return to the <Link to="/login">Log In</Link> page
      </p>
    </>
  )
}
