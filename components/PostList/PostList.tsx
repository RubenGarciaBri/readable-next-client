import * as React from "react"

import { useDispatch, useSelector } from "react-redux"

import Post from "../../components/Post/Post"
// Selectors
import { getAllPostIdsSelector } from "../../redux/posts/selectors"
// Actions
import { getPosts } from "../../redux/posts/actions"

const PostList = () => {
  const dispatch = useDispatch()

  const posts = useSelector(getAllPostIdsSelector())

  React.useEffect(() => {
    dispatch(getPosts())
  }, [])

  return (
    <div>
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
    </div>
  )
}

export default PostList
