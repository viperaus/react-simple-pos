import React from 'react'

const ProductButton = ({ plu, description, price, onStop, img, functions }) => {
  const defaultStyle =
    'inline-block mx-1 my-1 px-6 py-2.5  font-medium text-xs leading-tight uppercase rounded shadow-md  hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out'
  const enabledStyle = `${defaultStyle} bg-blue-800 text-white hover:bg-blue-200 focus:bg-blue-700 active:bg-blue-800`
  const disabledStyle = `${defaultStyle} bg-gray-600 text-gray-400 hover:bg-gray-700 focus:bg-gray-300 active:bg-gray-600 cursor-not-allowed`

  return (
    <button
      key={plu}
      type="button"
      data-mdb-ripple="true"
      data-mdb-ripple-color="light"
      className={onStop ? disabledStyle : enabledStyle}
      onClick={() => functions.sellItem(plu, description, price)}
      disabled={onStop}
    >
      {img ? <img src={img} className="my-1 w-[73px] h-[73px]" /> : <div className="my-1 w-[73px] h-[73px]">&nbsp;</div>}
      {description}
      <br />${price / 100}
    </button>
  )
}

export default ProductButton
