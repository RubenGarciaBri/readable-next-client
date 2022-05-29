import * as React from "react"

import { Comment } from "../Comment"

interface IPropTypes {
  comments: Array<any>
}

const CommentList = ({ comments }: IPropTypes) => {
  return (
    <div>
      {comments.map((comment: any, i: number) => {
        const { username, body } = comment

        return (
          <div key={comment + i}>
            <Comment username={username} body={body} />
          </div>
        )
      })}
    </div>
  )
}

export default CommentList
