import React from "react"

import profilePic from "../../../public/img/sample-profile.jpeg"
import Link from "next/link"
import { FaSearch } from "react-icons/fa"
import ProfilePicture from "../../ProfilePicture/ProfilePicture"
import NotificationsButton from "../Buttons/NotificationsButton/NotificationsButton"
import LogoutButton from "../Buttons/LogoutButton/LogoutButton"

const TopBar = () => {
  return (
    <div className="pt-2 pb-1 border-b border-gray-200 drop-shadow">
      <div className="flex justify-between px-4 align-items main-container">
        <div className="flex justify-between align-items">
          <span className="pt-1.5 text-xl font-bold uppercase">
            <Link href="/">Readable</Link>
          </span>
          <div className="relative">
            <FaSearch size={15} className="absolute left-10 top-3" />
            <input
              type="text"
              placeholder="Search"
              className="w-full py-2 pl-10 ml-6 bg-gray-200 rounded-full placeholder:text-gray-600 placeholder:font-light placeholder:text-sm"
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

export default TopBar
