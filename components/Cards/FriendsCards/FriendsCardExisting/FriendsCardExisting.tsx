import React from "react"

import FriendsCardBase from "../FriendsCardBase/FriendsCardBase"
import { ProfileButton } from "../../../Buttons"
import ProfilePicture from "../../../UserPicture/UserPicture"

interface IPropTypes {
  profilePicture: StaticImageData
  name: string
  userName: string
}

const FriendsCardExisting = ({
  profilePicture,
  name,
  userName,
}: IPropTypes) => {
  return (
    <FriendsCardBase
      profilePicture={profilePicture}
      name={name}
      userName={userName}
    >
      <ProfileButton userName="@alex-34" />
    </FriendsCardBase>
  )
}

export default FriendsCardExisting
