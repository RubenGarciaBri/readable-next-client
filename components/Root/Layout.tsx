import * as React from "react"

import { linksArray } from "../../data/linksArray"
import { contacts } from "../../data/contacts"
import TopBar from "../Navigation/TopBar"
import NavBar from "../Navigation/NavBar"
import ProfileCard from "../Cards/ProfileCard/ProfileCard"
import ChatMenu from "../ChatMenu/ChatMenu"

interface IPropTypes {
  children: React.ReactNode
}

const Layout = ({ children }: IPropTypes) => {
  return (
    <>
      <TopBar />
      <div className="main-container">
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
    </>
  )
}

export default Layout
