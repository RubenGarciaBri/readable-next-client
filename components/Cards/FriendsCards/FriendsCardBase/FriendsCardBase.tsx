import * as React from "react"

import Image from "next/image"
import { CardBase } from "../../CardBase"
import ProfilePicture from "../../../UserPicture/UserPicture"

interface IPropTypes {
  children: React.ReactNode
  profilePicture: StaticImageData
  name: string
  userName: string
}

const FriendsCardBase = ({
  profilePicture,
  name,
  userName,
  children,
}: IPropTypes) => {
  return (
    <CardBase classNames="w-1/4">
      <div className="text-center">
        <Image
          src={profilePicture}
          width={65}
          height={65}
          className="rounded-full shadow-inner drop-shadow"
        />
        <span className="block mt-2 mb-0.5 text-lg">{name}</span>
        <p className="mb-5 text-sm text-gray-600">{userName}</p>
        <div className="flex justify-center gap-x-2">{children}</div>
      </div>
    </CardBase>
  )
}

export default FriendsCardBase
