import * as React from "react"

import Link from "next/link"

interface IPropTypes {
  classNames?: string
  userName: string
}

const ProfileButton = ({ classNames, userName }: IPropTypes) => {
  return (
    <Link href={`/profile/${userName}`}>
      <button
        className={`px-4 py-2 font-semibold text-sm text-white bg-blue-600 rounded-xl drop-shadow-sm ${
          classNames && classNames
        }`}
      >
        See Profile
      </button>
    </Link>
  )
}

export default ProfileButton
