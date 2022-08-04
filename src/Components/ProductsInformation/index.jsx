import { useState, useEffect } from 'react'
import { CogIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom'

const ProductsInformation = ({ currentSaleItems, currentCommand, handleCommandInputChange }) => {
  const [currentSaleTotal, setCurrentSaleTotal] = useState(0)

  useEffect(() => {
    let total = 0
    setCurrentSaleTotal(currentSaleItems.reduce((total, item) => total + item.price, total))
  }, [currentSaleItems])

  return (
    <div className="h-3/6 bg-slate-200 p-0 m-0">
      <div className=" h-2/3 p-0 m-0 overflow-x-hidden">
        <div className="flex flex-col m-0">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-y-auto">
                <table className="min-w-full">
                  <thead className="bg-gray-800 border-b">
                    <tr>
                      <th scope="col" className="text-sm font-medium text-white px-6 py-2 text-left">
                        Description
                      </th>
                      <th scope="col" className="text-sm font-medium text-white px-0 py-1 text-right">
                        <Link to={'/settings'}>
                          <CogIcon className="h-5 w-5" />
                        </Link>
                      </th>
                      <th scope="col" className="text-sm font-medium text-white px-6 py-2 text-right">
                        Price
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentSaleItems
                      .map((item, index) => {
                        return (
                          <tr className="bg-white border-b" key={`row_${index}`}>
                            <td className="text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap">{item.description}</td>
                            <td colSpan={2} className="text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap text-right">
                              ${(item.price / 100).toFixed(2)}
                            </td>
                          </tr>
                        )
                      })
                      .reverse()}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" h-1/6 py-2 px-1 m-0 text-4xl text-end bg-slate-300">${(currentSaleTotal / 100).toFixed(2)}</div>
      <div className=" h-1/6 p-0 m-0">
        <input type={'text'} className="w-full h-full" value={currentCommand} onChange={handleCommandInputChange} />
      </div>
    </div>
  )
}

export default ProductsInformation
