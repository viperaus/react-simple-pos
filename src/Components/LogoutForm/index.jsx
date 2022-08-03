import React from 'react'
import { Link } from 'react-router-dom'

export default function LogoutForm() {
  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-white text-center ">
        <p>You have been logged out</p>
        <p>
          Return to the <Link to="/login">Log In</Link> page
        </p>
      </div>
    </div>
  )
}
