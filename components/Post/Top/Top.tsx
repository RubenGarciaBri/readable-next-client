import * as React from "react"

import Link from "next/link"
import Image from "next/image"
import { useSelector } from "react-redux"
import TimeAgo from "react-timeago"

import { getPostByIdSelector } from "../../../redux/posts/selectors"
import { PostIdType } from "../types"

interface IPropTypes {
  id: PostIdType
}

const Top = ({ id }: IPropTypes) => {
  const { authorId, createdAt } = useSelector(getPostByIdSelector(id))
  return (
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
  )
}

export default Top
