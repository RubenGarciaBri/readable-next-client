import * as React from "react"

interface IPropTypes {
  children: React.ReactNode
}

const NavButtonBase = ({ children }: IPropTypes) => {
  return (
    <div className="relative w-10 h-10 transition duration-100 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300">
      <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        {children}
      </div>
    </div>
  )
}

export default NavButtonBase
