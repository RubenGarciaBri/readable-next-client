import * as React from "react"

import TopBar from "../Navigation/TopBar"
import NavBar from "../Navigation/NavBar"
import ProfileCard from "../Cards/ProfileCard/ProfileCard"

interface IPropTypes {
  children: React.ReactNode
}

const linksArray = [
  {
    title: "Home",
    url: "/",
    Icon: () => {
      return
    },
  },
  {
    title: "Friends",
    url: "/friends",
    Icon: () => {
      return
    },
  },
  {
    title: "Photos",
    url: "/photos",
    Icon: () => {
      return
    },
  },
  {
    title: "Chat",
    url: "/chat",
    Icon: () => {
      return
    },
  },
  {
    title: "Settings",
    url: "/settings",
    Icon: () => {
      return
    },
  },
]

const Layout = ({ children }: IPropTypes) => {
  return (
    <>
      <TopBar />
      <div className="main-container">
        <div className="flex justify-between mt-8 alig-center gap-x-16">
          <div className="flex flex-col gap-8 basis-1/4">
            <ProfileCard name="Ruben Garcia" userName="@rubenGB" />
            <NavBar linksArray={linksArray} />
          </div>
          <div className="basis-2/4">{children}</div>
          <div className="basis-1/4"></div>
        </div>
      </div>
    </>
  )
}

export default Layout
