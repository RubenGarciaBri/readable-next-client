import * as React from "react"

import FriendsCardBase from "./FriendsCardBase"
import ConfirmButton from "../../Buttons/ConfirmButton/ConfirmButton"
import IgnoreButton from "../../Buttons/IgnoreButton/IgnoreButton"

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
