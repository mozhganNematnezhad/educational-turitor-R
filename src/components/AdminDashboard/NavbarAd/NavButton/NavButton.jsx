import React from 'react'

const NavButton = ({color ,icon ,dotColor ,customClass}) => {
  return (
    <button
    type="button"
    // onClick={() => customFunc()}
    style={{ color }}
    className={`relative text-3xl rounded-full p-3 hover:bg-light-gray  `}
  >
    <span
      style={{ background: dotColor }}
      className={`absolute inline-flex rounded-full h-2 w-2  ${customClass}`}
    />
    {icon}
  </button>
  )
}

export default NavButton