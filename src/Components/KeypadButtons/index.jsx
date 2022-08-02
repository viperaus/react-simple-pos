import KeypadButton from '../KeypadButton'

const KeypadButtons = ({ updateCurrentCommand }) => {
  var buttonArray = [
    { name: '7', value: '7', command: '' },
    { name: '8', value: '8', command: '' },
    { name: '9', value: '9', command: '' },
    { name: '4', value: '4', command: '' },
    { name: '5', value: '5', command: '' },
    { name: '6', value: '6', command: '' },
    { name: '1', value: '1', command: '' },
    { name: '2', value: '2', command: '' },
    { name: '3', value: '3', command: '' },
    { name: '0', value: '0', command: '' },
    { name: '00', value: '00', command: '' },
    { name: 'E', value: '', command: 'ENTER' },
  ]

  const handleButtonPress = (cmd) => {
    updateCurrentCommand(cmd)
  }

  return (
    <div className="h-3/6">
      {buttonArray.map((btn) => {
        return <KeypadButton {...btn} handleButtonPress={handleButtonPress} />
      })}
    </div>
  )
}

export default KeypadButtons
