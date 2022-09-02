import * as React from "react"

import { useSelector } from "react-redux"

import { Post } from "../../components/Post"
import { getAllPostIdsSelector } from "../../redux/posts/selectors"

const PostList = () => {
  const posts = useSelector(getAllPostIdsSelector())

  return (
    <>
      {posts && posts.length > 0 ? (
        posts.map((id: string) => {
          return (
            <div key={id}>
              <Post id={id} />
            </div>
          )
        })
      ) : (
        <p>Loading...</p>
      )}
    </>
  )
}

export default PostList
