import * as React from "react"

import { useDispatch } from "react-redux"
import { useRouter } from "next/router"

import { useAuth } from "../../context/auth-context"
import { Top } from "./Top"
import { PostIdType } from "./types"
import { Voting } from "./Voting"
import { Bottom } from "./Bottom"
import { Body } from "./Body"

interface IPropTypes {
  id: PostIdType
}

const Post = ({ id }: IPropTypes) => {
  const router = useRouter()
  const { user } = useAuth()
  const dispatch = useDispatch()

  return (
    <div
      onClick={() => router.push(`/posts/${id}`)}
      className="flex my-6 overflow-hidden bg-white border border-gray-200 drop-shadow rounded-xl hover:border-gray-400 hover:cursor-pointer"
    >
      <div className="px-6 pt-6 pb-4 bg-gray-100">
        <Voting />
      </div>
      <div className="px-6 pt-6 pb-4">
        <Top id={id} />
        <Body id={id} />
        <Bottom id={id} />
      </div>
    </div>
  )
}

export default Post
