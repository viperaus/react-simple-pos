export const LoginErrorMessage = ({ msg }) => {
  if (msg.length > 0) {
    return <div className="text-stone-100">{msg}</div>
  } else {
    return <></>
  }
}
