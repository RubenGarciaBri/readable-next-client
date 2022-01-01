import * as React from "react"
import { FaUserPlus } from "react-icons/fa"
import Image from "next/image"

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
    <div className="relative flex items-center w-1/3 p-8 bg-white rounded-xl drop-shadow-lg">
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
      <button className="absolute p-4 text-white bg-blue-500 rounded-full shadow-inner bottom-3 right-4">
        <FaUserPlus size={18} />
      </button>
    </div>
  )
}

export default ProfileMainCard
