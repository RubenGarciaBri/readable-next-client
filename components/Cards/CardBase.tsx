import * as React from "react"

interface IPropTypes {
  children: React.ReactNode
}

const CardBase = ({ children }: IPropTypes) => {
  return (
    <div className="p-6 bg-gray-200 rounded-xl drop-shadow">{children}</div>
  )
}

export default CardBase
