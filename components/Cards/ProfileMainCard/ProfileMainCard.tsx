import * as React from "react"

import Image from "next/image"
import { AddFriendButtonSmall } from "../../Buttons"

interface IPropTypes {
  profilePic: StaticImageData
  // TODO: Check undefined and try to make as specific as possible
  name: string | string[] | undefined
  friendsNumber: number
  location: string
}

const ProfileMainCard = ({
  profilePic,
  name,
  friendsNumber,
  location,
}: IPropTypes) => {
  return (
    <div className="relative flex items-center p-8 bg-white profile-main-card rounded-xl drop-shadow-lg">
      <Image
        src={profilePic}
        width={100}
        height={100}
        className="rounded-full shadow-inner"
      />
      <div className="ml-6">
        <span className="block text-lg">{name}</span>
        <span className="block text-gray-600">{friendsNumber} friends</span>
        <span>{location}</span>
      </div>
      <AddFriendButtonSmall />
    </div>
  )
}

export default ProfileMainCard
