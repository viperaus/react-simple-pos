import React from 'react'
import { Link } from 'react-router-dom'

const TransactionComplete = () => {
  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-white text-center ">
        <div>Transaction Complete</div>
        <div>
          {' '}
          <Link to={'/pos'}>Start a new transaction</Link>
        </div>
        <div>or</div>
        <div>
          {' '}
          <Link to={'/logout'}>Logout</Link>
        </div>
      </div>
    </div>
  )
}

export default TransactionComplete
