import React from 'react'
import { useNavigate } from 'react-router-dom'

const TransactionComplete = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-white text-center ">
        <div>Transaction Complete</div>
        <div>
          {' '}
          <button className="rounded-lg hover:rounded bg-slate-700 p-4" onClick={() => navigate('/pos', { replace: true })}>
            Start a new transaction
          </button>
        </div>
        <div>or</div>
        <div>
          {' '}
          <button className="rounded-lg bg-slate-700 p-4" onClick={() => navigate('/logout', { replace: true })}>
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}

export default TransactionComplete
