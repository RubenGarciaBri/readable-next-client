import * as React from "react"

import Image from "next/image"
import Link from "next/link"
import { FaRegThumbsUp, FaRegComment, FaThumbsUp } from "react-icons/fa"

interface IPropTypes {
  name: string
  userName: string
  profilePicture: StaticImageData
  body: string
  postId: string
  timestamp: string
  likesCount: number
  commentsCount: number
}

const Post = ({
  name,
  userName,
  profilePicture,
  body,
  postId,
  timestamp,
  likesCount,
  commentsCount,
}: IPropTypes) => {
  return (
    <div className="px-6 pt-6 pb-4 my-6 bg-white drop-shadow rounded-xl">
      <div className="flex">
        <Image
          src={profilePicture}
          width={45}
          height={45}
          className="rounded-full shadow-inner"
        />
        <div className="ml-4">
          <span className="block -mb-1 font-semibold">{name}</span>
          <span className="text-sm text-gray-600">{timestamp}</span>
        </div>
      </div>
      <p className="my-6 text-gray-600">{body}</p>
      <div className="border-b border-gray-300 ">
        <ul>
          <li className="flex justify-between items-align">
            <div className="flex items-align">
              <div>
                <span className="inline-block p-1 rounded-full bg-primary-500">
                  <FaThumbsUp size={9} className="text-white" />
                </span>
              </div>
              <span className="ml-1 text-sm text-gray-600">{likesCount}</span>
            </div>
            <span className="text-sm text-gray-600">
              {commentsCount} comments
            </span>
          </li>
        </ul>
      </div>
      <ul className="flex mt-3">
        <li>
          <button
            onClick={() => console.log("Clicked Thumbs Up!")}
            className="flex items-center mr-6 font-semibold text-gray-600 text gap-x-1.5"
          >
            <FaRegThumbsUp className="text-primary-500" />
            Like
          </button>
        </li>
        <li>
          <button className="flex items-center font-semibold text-gray-600 gap-x-1.5">
            <FaRegComment className="text-primary-500" />
            Comment
          </button>
        </li>
      </ul>
      <div></div>
    </div>
  )
}

export default Post
