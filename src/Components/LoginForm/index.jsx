import { useState, useEffect } from 'react'
import { LockClosedIcon } from '@heroicons/react/solid'
import { sha512 } from 'js-sha512'
import { API_URL_LOGIN, API_URL_TOKEN } from '../../Endpoints'
import { LoginErrorMessage } from './LoginErrorMessage'
import { useNavigate } from 'react-router-dom'

/*
TODO:
 * Impliment actual login rather than using mock data and mock api endpoint
 * Impliment sqlite to store data rather than local storage
 * Get and store API token
 * Add functionality to create new account
 * Add ability to request forgotten password
 * Add additional login provider options (Google/Facebook/Twitter etc)
*/

const LoginForm = ({ setAuthenticated, authenticated }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [encodedPassword, setEncodedPassword] = useState('')
  const [loginErrorMessage, setLoginErrorMessage] = useState('')
  const [localAuth, setLocalAuth] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    //should run always
    if (localStorage.getItem('prefillData') !== null) {
      const prefillData = JSON.parse(localStorage.getItem('prefillData'))
      setUsername(prefillData.username)
      setPassword(prefillData.password)
      console.log('password NOT changed')
    }

    //should run only if password value is changed
    if (localStorage.getItem('prefillData') !== null) {
      setEncodedPassword(password)
    } else {
      const enc_pass = sha512(password)
      setEncodedPassword(enc_pass)
    }

    if (localAuth) {
      setAuthenticated(true)
      navigate('/pos', { replace: true })
    }

    if (authenticated) {
      console.log('authenticated = ', authenticated)
      navigate('/pos', { replace: true })
    } else {
      console.log('not authenticated = ', authenticated)
    }
  }, [password, localAuth, authenticated])

  const login = () => {
    const screenHeight = window.innerHeight
    const screenWidth = window.innerWidth
    const app_id = '2885436A-1064-4E78-A6B5-12CAA0890F1D'

    // const formData = {
    //   username: username,
    //   password: encodedPassword,
    //   app_id: app_id,
    //   width: screenWidth,
    //   height: screenHeight,
    // }

    const formDataMock = {
      username: 'bardemo',
      password: 'BarDemo123',
      app_id: '212121211-1111-2222-3333-121212121212',
      width: 1024,
      height: 720,
    }

    fetch(API_URL_LOGIN, {
      body: JSON.stringify(formDataMock),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setLoginErrorMessage('')

        localStorage.setItem('prefillData', JSON.stringify({ username, password: encodedPassword }))
        localStorage.setItem('settings', JSON.stringify(data.settings))
        localStorage.setItem('session', data.session)
        localStorage.setItem('username', data.username)
        localStorage.setItem('branch', data.branch)
        localStorage.setItem('terminal', data.terminal)
        localStorage.setItem('companycode', data.settings.companycode)

        if (data.validation_key) {
          localStorage.setItem('validation_key', data.validation_key)
        } else {
          localStorage.setItem('validation_key', 'BLANK')
        }

        console.log(data, localStorage)
      })
      .then(() => {
        getAPIToken()
        setLocalAuth(true)
      })
      .catch((e) => {
        console.error(e)
        switch (e.errno) {
          case 403:
            setLoginErrorMessage('Invalid username/password. Please try again')
            break
          case 0:
            setLoginErrorMessage('Could not communicate with server - please check your internet connection and try again')
            break
          default:
            setLoginErrorMessage('Unhandled error: ' + e.errno + ' - ' + e.errmsg)
            break
        }
      })
  }

  const getAPIToken = () => {
    /* this function to be completed - get token and store it locally for transaction submission
    const companyCode = localStorage.getItem('companycode')
    fetch(`${API_URL_TOKEN}?companycode=${companyCode}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
      })
      .catch((e) => console.error(e))
    */
  }

  const handleInputChange = (val, func) => {
    func(val)
  }

  const handleInputChangePassword = (val, func) => {
    localStorage.removeItem('prefillData')
    func(val)
  }

  const handleFormSubmission = (event) => {
    event.preventDefault()
    //console.log(username, password)
    login()
  }

  return (
    <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            {/*<img className="mx-auto h-18 w-auto" src="/images/logo.png" alt="Logo of app" />*/}
            <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-50">Sign in to Basic POS</h2>
            {/*
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                start your 14-day free trial
              </a>
            </p>
            */}
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={handleFormSubmission}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="username" className="sr-only">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Username"
                  value={username}
                  onChange={(event) => handleInputChange(event.target.value, setUsername)}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  value={password}
                  onChange={(event) => {
                    handleInputChangePassword(event.target.value, setPassword)
                  }}
                />
              </div>
            </div>
            {/*
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </a>
              </div>
            </div>
            */}
            {<LoginErrorMessage msg={loginErrorMessage} />}
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-stone-600 hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-stone-500 group-hover:text-stone-400" aria-hidden="true" />
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default LoginForm
