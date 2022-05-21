import * as React from "react"

import Link from "next/link"
import { useRouter } from "next/router"
import { CardBase } from "../../Cards"

interface IPropTypes {
  // TODO: Make more specific
  linksArray: Array<any>
}

const Navbar = ({ linksArray }: IPropTypes) => {
  const router = useRouter()
  return (
    <CardBase>
      <ul>
        {linksArray &&
          linksArray.map(({ title, url, Icon }, index) => {
            return (
              <li key={index}>
                <Link href={url}>
                  <a
                    className={`block p-4 border-b border-gray-300 flex align-items justify-content gap-x-4 ${
                      router.pathname === url && "font-semibold text-orange-500"
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

export default Navbar
