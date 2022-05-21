import * as React from "react"

import { FaUserPlus } from "react-icons/fa"

interface IPropTypes {
  iconSize?: number
  classNames?: string
}

const AddFriendButtonSmall = ({ iconSize, classNames }: IPropTypes) => {
  return (
    <button
      className={`absolute p-4 text-white bg-orange-500 rounded-full shadow-inner bottom-3 right-4 ${
        classNames && classNames
      }`}
    >
      <FaUserPlus size={iconSize ? iconSize : 16} />
    </button>
  )
}

export default AddFriendButtonSmall
