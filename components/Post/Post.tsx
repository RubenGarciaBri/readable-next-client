import * as React from "react"

import Image from "next/image"
import Link from "next/link"
import TimeAgo from "react-timeago"
import { FaRegThumbsUp, FaRegComment, FaThumbsUp } from "react-icons/fa"

import { useDispatch, useSelector } from "react-redux"
// Selectors
import { getPostByIdSelector } from "../../redux/posts/selectors"

interface IPropTypes {
  id: string
}

const Post = ({ id }: IPropTypes) => {
  const dispatch = useDispatch()

  const { username, body, commentIds, likeIds, timestamp } = useSelector(
    getPostByIdSelector(id)
  )

  return (
    <div className="px-6 pt-6 pb-4 my-6 bg-white drop-shadow rounded-xl">
      <div className="flex">
        {/* <Image
          src={profilePicture}
          width={45}
          height={45}
          className="rounded-full shadow-inner"
        /> */}
        {/* Temporary iamge placeholder */}
        <div className="w-10 h-10 bg-gray-200 rounded-full shadow"></div>
        <div className="ml-4">
          <Link href={`/profile/${username}`}>
            <a className="block -mb-1 font-semibold">{username}</a>
          </Link>
          <span className="text-sm text-gray-600">
            <TimeAgo date={timestamp} />
          </span>
        </div>
      </div>
      <p className="my-6 text-gray-600">{body}</p>
      <div className="border-b border-gray-300">
        <ul>
          <li className="flex justify-between items-align">
            <div className="flex items-align">
              <div>
                <span className="inline-block p-1 rounded-full bg-orange-500">
                  <FaThumbsUp size={9} className="text-white" />
                </span>
              </div>
              <span className="ml-1 text-sm text-gray-600">
                {likeIds?.length}
              </span>
            </div>
            <span className="text-sm text-gray-600">
              {commentIds?.length} comments
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
            <FaRegThumbsUp className="text-orange-500" />
            Like
          </button>
        </li>
        <li>
          <button className="flex items-center font-semibold text-gray-600 gap-x-1.5">
            <FaRegComment className="text-orange-500" />
            Comment
          </button>
        </li>
      </ul>
    </div>
  )
}

export default Post
