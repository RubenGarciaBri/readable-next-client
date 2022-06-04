import * as React from "react"

interface IPropTypes {
  children: React.ReactNode
  clickFn?: () => void
}

const NavButtonBase = ({ children, clickFn }: IPropTypes) => {
  return (
    <button
      className="relative w-10 h-10 transition duration-100 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300"
      onClick={clickFn}
    >
      <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        {children}
      </div>
    </button>
  )
}

export default NavButtonBase
