import LoginForm from '../../Components/LoginForm'

const LoginPage = ({ setAuthenticated, authenticated }) => {
  return <LoginForm setAuthenticated={setAuthenticated} authenticated={authenticated} />
}

export default LoginPage
