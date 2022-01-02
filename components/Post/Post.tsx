import * as React from "react"

import Image from "next/image"
import Link from "next/link"
import { FaRegThumbsUp, FaRegComment } from "react-icons/fa"

interface IPropTypes {
  name: string
  userName: string
  profilePicture: StaticImageData
  body: string
  postId: string
}

const Post = ({ name, userName, profilePicture, body, postId }: IPropTypes) => {
  return (
    <Link href={`/posts/${postId}`}>
      <div className="p-6 my-6 bg-gray-200 cursor-pointer drop-shadow rounded-xl">
        <div className="flex">
          <Image
            src={profilePicture}
            width={45}
            height={45}
            className="rounded-full shadow-inner"
          />
          <div className="ml-4">
            <span className="block -mb-1 text-sm font-semibold">{name}</span>
            <span className="text-xs text-gray-600">2 hours ago</span>
          </div>
        </div>
        <p className="mt-4 text-sm text-gray-600">{body}</p>
        <ul className="flex mt-6">
          <li>
            <button className="flex items-center mr-5 text-sm font-semibold text-gray-600 gap-x-1">
              <FaRegThumbsUp className="text-blue-500" />
              Like
            </button>
          </li>
          <li>
            <button className="flex items-center text-sm font-semibold text-gray-600 gap-x-1">
              <FaRegComment className="text-blue-500" />
              Comment
            </button>
          </li>
        </ul>
      </div>
    </Link>
  )
}

export default Post
