import React from 'react'
import KeypadButtons from '../KeypadButtons'
import ProductsInformation from '../ProductsInformation'
import { useState } from 'react'

const ScreenLeft = ({ currentSaleItems }) => {
  const [currentCommand, setCurrentCommand] = useState('')

  const updateCurrentCommand = (cmd) => {
    setCurrentCommand(currentCommand + String(cmd))
  }

  const handleCommandInputChange = (event) => {
    setCurrentCommand(event.target.value)
  }

  return (
    <div className="w-2/6">
      <ProductsInformation currentSaleItems={currentSaleItems} currentCommand={currentCommand} handleCommandInputChange={handleCommandInputChange} />
      <KeypadButtons updateCurrentCommand={updateCurrentCommand} />
    </div>
  )
}

export default ScreenLeft
