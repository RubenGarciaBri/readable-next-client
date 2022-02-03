import * as React from "react"

interface IPropTypes {
  classNames?: string
}
const IgnoreButton = ({ classNames }: IPropTypes) => {
  return (
    <button
      className={`px-4 py-2 text-sm font-semibold text-white bg-gray-700 rounded-xl drop-shadow-sm ${
        classNames && classNames
      }`}
    >
      Ignore
    </button>
  )
}

export default IgnoreButton
