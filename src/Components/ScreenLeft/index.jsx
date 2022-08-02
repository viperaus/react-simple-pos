import React from 'react'
import KeypadButtons from '../KeypadButtons'
import ProductsInformation from '../ProductsInformation'
import { useState } from 'react'

const ScreenLeft = ({ currentSaleItems }) => {
  const [currentCommand, setCurrentCommand] = useState('')

  const updateCurrentCommand = (cmd) => {
    setCurrentCommand(currentCommand + String(cmd))
  }

  return (
    <div className="basis-1/3">
      <ProductsInformation currentSaleItems={currentSaleItems} currentCommand={currentCommand} />
      <KeypadButtons updateCurrentCommand={updateCurrentCommand} />
    </div>
  )
}

export default ScreenLeft
