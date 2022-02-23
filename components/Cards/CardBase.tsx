import * as React from "react"

interface IPropTypes {
  children: React.ReactNode
  classNames?: string
}

const CardBase = ({ children, classNames }: IPropTypes) => {
  return (
    <div className={`p-6 bg-white rounded-xl drop-shadow ${classNames}`}>
      {children}
    </div>
  )
}

export default CardBase
