import { useState } from 'react'
import ScreenLeft from '../../Components/ScreenLeft'
import ScreenRight from '../../Components/ScreenRight'

const PosPage = () => {
  const [currentSaleItems, setCurrentSaleItems] = useState([])

  return (
    <div className="container">
      <div className="flex flex-row h-screen">
        <ScreenLeft currentSaleItems={currentSaleItems} />
        <ScreenRight />
      </div>
    </div>
  )
}

export default PosPage
