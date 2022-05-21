import * as React from "react"

import axios from "axios"
import type { NextPage } from "next"
import { useDispatch, useSelector } from "react-redux"

import Layout from "../components/Root/Layout"
import CreatePost from "../components/CreatePost/CreatePost"
import CreatePostModal from "../components/CreatePost/Modal/CreatePostModal"
import Post from "../components/Post/Post"

// Selectors
import { getAllPostIdsSelector } from "../redux/posts/selectors"
// Actions
import { getPosts } from "../redux/posts/actions"

const Home: NextPage = () => {
  const [showModal, setShowModal] = React.useState(false)

  const dispatch = useDispatch()

  const posts = useSelector(getAllPostIdsSelector())

  React.useEffect(() => {
    dispatch(getPosts())
  }, [])

  return (
    <>
      <Layout>
        <CreatePost handleClick={() => setShowModal(true)} />
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
      </Layout>
      <CreatePostModal onClose={() => setShowModal(false)} show={showModal} />
    </>
  )
}

export default Home
