import * as React from "react"

import Image from "next/image"
import Link from "next/link"
import TimeAgo from "react-timeago"
import { FaRegThumbsUp, FaRegComment, FaThumbsUp } from "react-icons/fa"

import { CommentList } from "../CommentList"
import { useDispatch, useSelector } from "react-redux"
// Selectors
import { getPostByIdSelector } from "../../redux/posts/selectors"

interface IPropTypes {
  id: string
}

const Post = ({ id }: IPropTypes) => {
  const dispatch = useDispatch()
  const [openComments, setOpenComments] = React.useState(false)

  const { authorId, body, commentIds, likeIds, createdAt } = useSelector(
    getPostByIdSelector(id)
  )

  const comments = [
    { userName: "Gerrard74", body: "Hey there, how is it going?" },
    { userName: "Lanc2", body: "Supp man, long time no talk!" },
    {
      userName: "Jessy_LA",
      body: "Wow, that's so cool, looking forward to see you",
    },
  ]

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
          <Link href={`/profile/${authorId}`}>
            <a className="block -mb-1 font-semibold">{authorId}</a>
          </Link>
          <span className="text-sm text-gray-600">
            <TimeAgo date={createdAt} />
          </span>
        </div>
      </div>
      <p className="my-6 text-gray-600">{body}</p>
      <div className="pb-2 border-b border-gray-300">
        <ul>
          <li className="flex justify-between items-align">
            <div className="flex items-align">
              <div>
                <span className="inline-block p-1 bg-blue-600 rounded-full">
                  <FaThumbsUp size={9} className="text-white" />
                </span>
              </div>
              <span className="ml-1 text-sm text-gray-600">
                {likeIds?.length}
              </span>
            </div>
            <button
              className="text-sm text-gray-600"
              onClick={() => setOpenComments(!openComments)}
            >
              {commentIds?.length} comments
            </button>
          </li>
        </ul>
      </div>
      <ul className="flex my-3">
        <li>
          <button
            onClick={() => console.log("Clicked Thumbs Up!")}
            className="flex items-center mr-6 font-semibold text-gray-600 text gap-x-1.5"
          >
            <FaRegThumbsUp className="text-blue-600" />
            Like
          </button>
        </li>
        <li>
          <button className="flex items-center font-semibold text-gray-600 gap-x-1.5">
            <FaRegComment className="text-blue-600" />
            Comment
          </button>
        </li>
      </ul>
      {openComments && comments.length > 0 && (
        <CommentList comments={comments} />
      )}
    </div>
  )
}

export default Post
