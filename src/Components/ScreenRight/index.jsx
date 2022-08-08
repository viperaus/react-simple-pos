import DepartmentTabs from '../DepartmentTabs'
import { useNavigate } from 'react-router-dom'

const ScreenRight = ({ functions }) => {
  let navigate = useNavigate()

  return (
    <>
      <div className="w-4/6">
        <div className="flex h-full">
          <div className="w-full">
            <DepartmentTabs functions={functions} />
          </div>
        </div>

        <div className=" bg-gray-600 text-gray-100 w-4/6 fixed bottom-0  text-end">
          <div className="container p-6">
            <button
              type="button"
              className="inline-block px-6 py-2 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
              onClick={() => {
                functions.printReceipt()
                functions.clearSale()
                navigate('/completed', { replace: true })
              }}
            >
              Complete Sale
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ScreenRight
