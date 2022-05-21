import * as React from "react"

import FriendsCardBase from "../FriendsCardBase/FriendsCardBase"
import { ConfirmButton } from "../../../Buttons"
import { IgnoreButton } from "../../../Buttons"

interface IPropTypes {
  profilePicture: StaticImageData
  name: string
  userName: string
}

const FriendsCardRequest = ({ profilePicture, name, userName }: IPropTypes) => {
  return (
    <FriendsCardBase
      profilePicture={profilePicture}
      name={name}
      userName={userName}
    >
      <ConfirmButton />
      <IgnoreButton />
    </FriendsCardBase>
  )
}

export default FriendsCardRequest
