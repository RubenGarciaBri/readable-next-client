import * as React from "react"

interface IPropTypes {
  children: React.ReactNode
  classNames?: string
}
/**
 * Returns a CardBase component
 * @param {string} classNames String of class names
 * @returns
 */
const CardBase = ({ children, classNames }: IPropTypes) => {
  return (
    <div
      className={`p-6 bg-white rounded-xl drop-shadow ${
        classNames ? classNames : ""
      }`}
    >
      {children}
    </div>
  )
}

export default CardBase
