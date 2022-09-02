import * as React from "react"

import { FaComment, FaRegStar } from "react-icons/fa"
import { useSelector } from "react-redux"
import { getPostByIdSelector } from "../../../redux/posts/selectors"
import { PostIdType } from "../types"

interface IPropTypes {
  id: PostIdType
}

const Bottom = ({ id }: IPropTypes) => {
  const { commentIds } = useSelector(getPostByIdSelector(id))
  return (
    <div className="flex items-center text-gray-600 gap-x-3">
      <div className="flex items-center gap-x-1">
        <FaComment />
        {commentIds?.length} comments
      </div>
      <div className="flex items-center gap-x-1">
        <FaRegStar />
        Fav
      </div>
    </div>
  )
}

export default Bottom
