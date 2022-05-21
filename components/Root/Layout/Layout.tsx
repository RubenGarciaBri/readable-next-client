import * as React from "react"

import { linksArray } from "../../../data/linksArray"
import { Topbar } from "../../Navigation"
import { Navbar } from "../../Navigation"
import { ProfileCard } from "../../Cards"

interface IPropTypes {
  children: React.ReactNode
}

const Layout = ({ children }: IPropTypes) => {
  return (
    <div className="min-h-screen bg-gray-150">
      <Topbar />
      <div className="px-4 main-container">
        <div className="flex justify-between mt-8 alig-center gap-x-8">
          <div className="flex flex-col w-1/4 gap-8">
            <ProfileCard name="Ruben Garcia" userName="@rubenGB" />
            <Navbar linksArray={linksArray} />
          </div>
          <div className="w-3/4">{children}</div>
        </div>
      </div>
    </div>
  )
}

export default Layout
