import * as React from "react"

import TopBar from "../Navigation/TopBar"
import NavBar from "../Navigation/NavBar"
import ProfileCard from "../Cards/ProfileCard/ProfileCard"

interface IPropTypes {
  children: React.ReactNode
}

const Layout = ({ children }: IPropTypes) => {
  return (
    <>
      <TopBar />
      <div className="main-container">
        <div className="flex justify-between mt-8 alig-center gap-x-16">
          <div className="basis-1/4">
            <ProfileCard name="Ruben Garcia" userName="@rubenGB" />
            <NavBar />
          </div>
          <div className="basis-2/4">{children}</div>
          <div className="basis-1/4"></div>
        </div>
      </div>
    </>
  )
}

export default Layout
