import { useState, useEffect } from 'react'
import ScreenLeft from '../../Components/ScreenLeft'
import ScreenRight from '../../Components/ScreenRight'

/*
 TODO
  * Use a library to handle passing functions from this top level down all levels until it reaches the buttons
*/

const PosPage = () => {
  const [currentSaleItems, setCurrentSaleItems] = useState([])

  const addItemIntoCurrentSale = (plu, description, price) => {
    let combinedItems = [...currentSaleItems, { plu, description, price }]
    setCurrentSaleItems(combinedItems)
    localStorage.setItem('current_sale', JSON.stringify(combinedItems))
  }

  const clearCurrentSale = () => {
    setCurrentSaleItems([])
    localStorage.setItem('current_sale', JSON.stringify([]))
  }

  const saleFunctions = {
    sellItem: addItemIntoCurrentSale,
    clearSale: clearCurrentSale,
  }

  useEffect(() => {
    let storedItems = [...JSON.parse(localStorage.getItem('current_sale'))]
    if (storedItems.length > 0) {
      setCurrentSaleItems(storedItems)
    }
  }, [])

  return (
    <div className="w-screen">
      <div className="flex flex-row h-screen">
        <ScreenLeft currentSaleItems={currentSaleItems} />
        <ScreenRight functions={saleFunctions} />
      </div>
    </div>
  )
}

export default PosPage
