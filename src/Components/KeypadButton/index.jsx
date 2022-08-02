const KeypadButton = ({ name, value, command, handleButtonPress }) => {
  const buttonAction = command !== '' ? command : value

  return (
    <button
      key={name + '_' + value}
      type="button"
      className=" w-1/3 h-1/4 bg-slate-700 border border-solid touch-auto"
      value={value}
      onClick={() => handleButtonPress(buttonAction)}
    >
      {name}
    </button>
  )
}

export default KeypadButton
