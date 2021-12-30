import * as React from "react"

import profilePic from "../../public/img/sample-profile.jpeg"
import Image from "next/image"
import CardBase from "../Cards/CardBase"

const CreatePost = () => {
  return (
    <CardBase>
      <div className="flex align-items">
        <Image
          src={profilePic}
          width={55}
          height={55}
          className="rounded-full shadow-inner"
        />
        <input
          type="text"
          placeholder="Create a new post"
          className="w-full pl-6 ml-6 rounded-full"
        />
      </div>
    </CardBase>
  )
}

export default CreatePost