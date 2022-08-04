import { useState, useEffect } from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'

import LoginPage from './Pages/Login'
import PosPage from './Pages/Pos'
import SettingsPage from './Pages/Settings'
import LogoutPage from './Pages/Logout'
import TransactionCompletedPage from './Pages/TransactionCompleted'

/**
 * TODO:
 * Handle authentication in a better way (see: https://reactrouter.com/docs/en/v6/examples/auth)
 *
 * When setting route to /pos or /settings and not authenticated, we should redirect to /login and not just show the login form
 *
 */

const App = () => {
  const [authenticated, setAuthenticated] = useState(false)

  useEffect(() => {
    const prefillData = localStorage.getItem('prefillData')
    if (prefillData !== null) {
      setAuthenticated(true)
    } else {
      setAuthenticated(false)
    }
  }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage setAuthenticated={setAuthenticated} authenticated={authenticated} />} />
        <Route path="/pos" element={authenticated ? <PosPage /> : <LoginPage setAuthenticated={setAuthenticated} authenticated={authenticated} />} />
        <Route path="/settings" element={authenticated ? <SettingsPage /> : <LoginPage setAuthenticated={setAuthenticated} authenticated={authenticated} />} />
        <Route
          path="/completed"
          element={authenticated ? <TransactionCompletedPage /> : <LoginPage setAuthenticated={setAuthenticated} authenticated={authenticated} />}
        />
        <Route path="/logout" element={<LogoutPage setAuthenticated={setAuthenticated} authenticated={authenticated} />} />
        <Route path="*" element={<LoginPage setAuthenticated={setAuthenticated} authenticated={authenticated} />} />
      </Routes>
      <Outlet />
    </>
  )
}

export default App
