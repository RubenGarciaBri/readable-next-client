import * as React from "react"

import type { NextPage } from "next"

import { useDispatch } from "react-redux"
import { Layout } from "../components/Root"
import { CreatePost } from "../components/CreatePost"
import { CreatePostModal } from "../components/Modals"
import { PostList } from "../components/PostList"
import { getPosts } from "../redux/posts/actions"
import { getLikes } from "../redux/likes/actions"

const Home: NextPage = () => {
  const dispatch = useDispatch()
  const [showModal, setShowModal] = React.useState(false)

  React.useEffect(() => {
    dispatch(getLikes())
    dispatch(getPosts())
  }, [])

  return (
    <>
      <Layout>
        <CreatePost handleClick={() => setShowModal(true)} />
        <PostList />
      </Layout>
      <CreatePostModal onClose={() => setShowModal(false)} show={showModal} />
    </>
  )
}

export default Home
