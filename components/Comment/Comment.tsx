import * as React from "react"

interface IPropTypes {
  username: string
  body: string
}

const Comment = ({ username, body }: IPropTypes) => {
  return (
    <div className="flex items-center gap-x-2">
      <div className="self-start w-8 h-8 bg-gray-200 rounded-full"></div>
      <div className="px-2 ">
        <p className="font-semibold">{username}</p>
        <p className="text-sm">{body}</p>
      </div>
    </div>
  )
}

export default Comment
