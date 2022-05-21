import * as React from "react"

import type { NextPage } from "next"

import { Layout } from "../components/Root"
import { CreatePost } from "../components/CreatePost"
import { CreatePostModal } from "../components/Modals"
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
