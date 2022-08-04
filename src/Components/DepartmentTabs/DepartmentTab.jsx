import React from 'react'

const DepartmentTab = ({ id, description, selectedDepartment, setSelectedDepartment }) => {
  const inactiveClass =
    'nav-link block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent'
  const activeClass = `${inactiveClass} active`

  return (
    <li key={id} className="nav-item" role="presentation">
      <a
        href={`#tabs-${description}`}
        className={selectedDepartment === description ? activeClass : inactiveClass}
        id={`tabs-${description}-tab`}
        data-bs-toggle="pill"
        data-bs-target={`#tabs-${description}`}
        role="tab"
        aria-controls={`tabs-${description}`}
        aria-selected={selectedDepartment === description ? true : false}
        onClick={() => setSelectedDepartment(description)}
      >
        {description}
      </a>
    </li>
  )
}

export default DepartmentTab
