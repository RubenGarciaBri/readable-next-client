import * as React from "react"

import type { NextPage } from "next"
import Layout from "../components/Root/Layout"
import CreatePost from "../components/CreatePost/CreatePost"
import CreatePostModal from "../components/CreatePost/Modal/CreatePostModal"

const Home: NextPage = () => {
  const [showModal, setShowModal] = React.useState(false)

  return (
    <div>
      {/* <button onClick={() => setShowModal(true)}>Open Modal</button> */}
      <Layout>
        <CreatePost handleClick={() => setShowModal(true)} />
      </Layout>
      <CreatePostModal onClose={() => setShowModal(false)} show={showModal} />
    </div>
  )
}

export default Home
