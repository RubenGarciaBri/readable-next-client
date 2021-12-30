import * as React from "react"

import Link from "next/link"
import { useRouter } from "next/router"
import CardBase from "../Cards/CardBase"

interface IPropTypes {
  // TODO: Make more specific
  linksArray: Array<any>
}

const NavBar = ({ linksArray }: IPropTypes) => {
  const router = useRouter()
  return (
    <CardBase>
      <ul className="">
        {linksArray &&
          linksArray.map(({ title, url, Icon }) => {
            return (
              <li className="">
                <Link href={url}>
                  {/* Make active link text bold */}
                  <a
                    className={`block p-4 border-b border-gray-300 flex align-items justify-content gap-x-4 ${
                      router.pathname === url && "font-bold"
                    } `}
                  >
                    {Icon}
                    {title}
                  </a>
                </Link>
              </li>
            )
          })}
      </ul>
    </CardBase>
  )
}

export default NavBar
