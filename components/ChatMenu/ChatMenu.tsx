import * as React from "react"

import Link from "next/link"
import Image from "next/image"
import CardBase from "../Cards/CardBase"

interface IPropTypes {
  // TODO: Make this more specific
  contacts: Array<any>
}

const ChatMenu = ({ contacts }: IPropTypes) => {
  return (
    <CardBase>
      <ul className="">
        {contacts &&
          contacts.map(({ name, userName, profilePicture }) => {
            return (
              <li>
                <Link href="/chat">
                  {/* Make active link text bold */}
                  <a className="flex block p-4 border-b border-gray-300 align-items justify-content gap-x-4">
                    <Image
                      src={profilePicture}
                      width={45}
                      height={45}
                      className="rounded-full shadow-inner"
                    />
                    <div>
                      <span className="block -mb-1 font-semibold">{name}</span>
                      <span className="text-sm font-light text-gray-600">
                        {userName}
                      </span>
                    </div>
                  </a>
                </Link>
              </li>
            )
          })}
      </ul>
    </CardBase>
  )
}

export default ChatMenu
