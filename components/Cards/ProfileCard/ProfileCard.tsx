import * as React from "react"

import Image from "next/image"
import profilePic from "../../../public/img/sample-profile.jpeg"
import CardBase from "../CardBase"

interface IPropTypes {
  name: string
  userName: string
}

const ProfileCard = ({ name, userName }: IPropTypes) => {
  return (
    <CardBase>
      <div className="flex items-center">
        {/* TODO: Replace with Next Image component */}
        <Image
          src={profilePic}
          width={55}
          height={55}
          className="rounded-full shadow-inner"
        />
        <div className="ml-4">
          <span className="block -mb-1 font-semibold">{name}</span>
          <span className="text-sm font-light text-gray-600">{userName}</span>
        </div>
      </div>
    </CardBase>
  )
}

export default ProfileCard
