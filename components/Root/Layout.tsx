import * as React from "react"

import { linksArray } from "../../data/linksArray"
import { contacts } from "../../data/contacts"
import TopBar from "../Navigation/TopBar/TopBar"
import NavBar from "../Navigation/NavBar/NavBar"
import ProfileCard from "../Cards/ProfileCard/ProfileCard"
import ChatMenu from "../ChatMenu/ChatMenu"

interface IPropTypes {
  children: React.ReactNode
}

const Layout = ({ children }: IPropTypes) => {
  return (
    <div className="min-h-screen bg-gray-150">
      <TopBar />
      <div className="px-4 main-container">
        <div className="flex justify-between mt-8 alig-center gap-x-8">
          <div className="flex flex-col gap-8 basis-1/4">
            <ProfileCard name="Ruben Garcia" userName="@rubenGB" />
            <NavBar linksArray={linksArray} />
          </div>
          <div className="basis-2/4">{children}</div>
          <div className="basis-1/4">
            <ChatMenu contacts={contacts} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
