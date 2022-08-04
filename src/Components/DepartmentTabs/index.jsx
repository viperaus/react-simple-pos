import React, { useState } from 'react'
import { departments } from '../../MockData/products'

import DepartmentTab from './DepartmentTab'
import DepartmentTabContent from './DepartmentTabContent'

const DepartmentTabs = ({ functions }) => {
  const [selectedDepartment, setSelectedDepartment] = useState(departments[0].description)

  const style = { ul: 'nav nav-tabs flex flex-row md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4 bg-slate-100' }

  return (
    <>
      <ul className={style.ul} id="tabs-tab" role="tablist">
        {departments.map((item) => {
          return <DepartmentTab key={item.id} {...item} selectedDepartment={selectedDepartment} setSelectedDepartment={setSelectedDepartment} />
        })}
      </ul>
      <div className="tab-content" id="tabs-tabContent">
        {departments.map((item) => {
          return <DepartmentTabContent key={`content_${item.id}`} {...item} selectedDepartment={selectedDepartment} functions={functions} />
        })}
      </div>
    </>
  )
}

export default DepartmentTabs
