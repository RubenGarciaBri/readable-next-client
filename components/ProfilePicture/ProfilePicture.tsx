import * as React from "react"

import Link from "next/link"
import Image from "next/image"
import { OnlineBadge } from "../OnlineBadge"

interface IPropTypes {
  profilePic: StaticImageData
  isOnline?: boolean
}

const ProfilePicture = ({ profilePic, isOnline }: IPropTypes) => {
  // TODO: Temporary placeholder, remove and use actual username
  const userName = "Ruben Garcia"

  return (
    <Link href={`/profile/${userName}`}>
      <div className="relative cursor-pointer">
        <Image
          src={profilePic}
          width={40}
          height={40}
          className="rounded-full shadow-inner"
        />
        {isOnline && <OnlineBadge />}
      </div>
    </Link>
  )
}

export default ProfilePicture
