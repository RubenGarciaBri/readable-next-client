import * as React from "react"

interface IPropTypes {
  classNames?: string
}

const ConfirmButton = ({ classNames }: IPropTypes) => {
  return (
    <button
      className={`px-4 py-2 font-semibold text-sm text-white bg-blue-600 rounded-xl drop-shadow-sm ${
        classNames && classNames
      }`}
    >
      Confirm
    </button>
  )
}

export default ConfirmButton
