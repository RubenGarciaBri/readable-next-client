import * as React from "react"

import type { NextPage } from "next"

import Layout from "../components/Root/Layout"
import CreatePost from "../components/CreatePost/CreatePost"
import CreatePostModal from "../components/CreatePost/Modal/CreatePostModal"
import { PostList } from "../components/PostList"

const Home: NextPage = () => {
  const [showModal, setShowModal] = React.useState(false)

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
