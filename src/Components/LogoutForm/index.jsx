import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function LogoutForm() {
  const navigate = useNavigate()
  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-white text-center ">
        <p>You have been logged out</p>
        <p>
          <button
            className="rounded-lg bg-slate-700 p-4"
            onClick={() => {
              navigate('/login', { replace: true })
            }}
          >
            Return to the Log In page
          </button>
        </p>
      </div>
    </div>
  )
}
