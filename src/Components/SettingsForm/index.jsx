import { useState, useEffect } from 'react'
import GeneralSettings from './GeneralSettings'
import PrintingSettings from './PrintingSettings'

import { useNavigate } from 'react-router-dom'

const SettingsForm = () => {
  let navigate = useNavigate()

  const [settings, setSettings] = useState({ ...JSON.parse(localStorage.getItem('settings') ?? null) })

  const handleInputChange = () => {
    let newSettings = { ...settings }
    setSettings(newSettings)
    localStorage.setItem('settings', JSON.stringify(newSettings))
  }

  const handleFormSubmission = (e) => {
    e.preventDefault()
    handleInputChange()
    navigate('/pos', { replace: true })
  }

  const handleLogout = () => {
    navigate('/logout', { replace: true })
  }

  const classes = {
    default:
      'w-1/4 px-6 py-2.5 mx-2 text-white font-medium text-xs leading-tight uppercase rounded shadow-md transition duration-150 ease-in-out focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg hover:shadow-lg',
    red: 'bg-red-500 hover:bg-red-700 focus:bg-red-700 active:bg-red-800',
    blue: 'bg-blue-500 hover:bg-blue-700 focus:bg-blue-700 active:bg-blue-800',
    green: 'bg-green-500 hover:bg-green-700 focus:bg-green-700 active:bg-green-800',
    orange: 'bg-orange-500 hover:bg-orange-700 focus:bg-orange-700 active:bg-orange-800',
  }

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl w-full space-y-8 text-black text-center ">
        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-xl">
          <form>
            <GeneralSettings settings={settings} handleInputChange={handleInputChange} />
            <PrintingSettings settings={settings} handleInputChange={handleInputChange} />
            <button type="submit" className={`${classes.default} ${classes.blue}`} onClick={handleFormSubmission}>
              Close
            </button>
            <button type="submit" className={`${classes.default} ${classes.orange}`} onClick={handleLogout}>
              Logout
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SettingsForm
