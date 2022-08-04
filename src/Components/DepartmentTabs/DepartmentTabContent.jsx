import React from 'react'
import ProductButton from '../ProductButton'
import { products } from '../../MockData/products'

const DepartmentTabContent = ({ id, description, selectedDepartment, functions }) => {
  const inactiveClass = 'tab-pane fade show'
  const activeClass = `${inactiveClass} active`

  return (
    <div
      key={`${id}_${description}`}
      className={description === selectedDepartment ? activeClass : inactiveClass}
      id={`tabs-${description}`}
      role="tabpanel"
      aria-labelledby={`tabs-${description}-tab`}
    >
      {products
        .filter((item) => item.department === selectedDepartment)
        .map((product) => (
          <ProductButton {...product} functions={functions} />
        ))}
    </div>
  )
}

export default DepartmentTabContent
