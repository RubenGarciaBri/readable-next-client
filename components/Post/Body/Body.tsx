import * as React from "react"

import { useSelector } from "react-redux"

import { getPostByIdSelector } from "../../../redux/posts/selectors"
import { truncateString } from "../../../utils"
import { PostIdType } from "../types"

interface IPropTypes {
  id: PostIdType
}

const Body = ({ id }: IPropTypes) => {
  const { body } = useSelector(getPostByIdSelector(id))

  return <p className="my-6 text-gray-600">{truncateString(body)}</p>
}

export default Body
