import React from "react"

import profilePic from "../../../public/img/sample-profile.jpeg"
import Link from "next/link"
import { FaSearch } from "react-icons/fa"
import { ProfilePicture } from "../../ProfilePicture"
import { NotificationsButton } from "../../Buttons"
import { LogoutButton } from "../../Buttons"

const Topbar = () => {
  return (
    <div className="pt-2.5 pb-1 bg-white border-b border-gray-200 drop-shadow-sm">
      <div className="flex justify-between px-4 align-items main-container">
        <div className="flex justify-between align-items">
          <span className="pt-1.5 text-xl text-blue-600 font-bold">
            <Link href="/">Readable</Link>
          </span>
          <div className="relative">
            <FaSearch
              size={15}
              className="absolute text-gray-500 left-10 top-3"
            />
            <input
              type="text"
              placeholder="Search"
              className="w-full py-2 pl-10 ml-6 bg-gray-100 rounded-full shadow-inner placeholder:text-gray-500 placeholder:text-sm"
            />
          </div>
        </div>
        <div className="flex align-items gap-x-4">
          <ProfilePicture profilePic={profilePic} isOnline />
          <NotificationsButton />
          <LogoutButton />
        </div>
      </div>
    </div>
  )
}

export default Topbar
