import * as React from "react"

interface IPropTypes {
  image: StaticImageData
}

const ProfileHeader = ({ image }: IPropTypes) => {
  return <div className="bg-gray-400 h-80 rounded-b-xl bg-center bg-no-repeat bg-cover bg-[url('/img/bg-sample.jpg')]"></div>
}

export default ProfileHeader
