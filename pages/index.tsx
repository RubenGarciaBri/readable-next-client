import * as React from "react"

import type { NextPage } from "next"
import Layout from "../components/Root/Layout"
import CreatePost from "../components/CreatePost/CreatePost"
import CreatePostModal from "../components/CreatePost/Modal/CreatePostModal"
import { posts } from "../data/posts"
import Post from "../components/Post/Post"

const Home: NextPage = () => {
  const [showModal, setShowModal] = React.useState(false)

  return (
    <div>
      {/* <button onClick={() => setShowModal(true)}>Open Modal</button> */}
      <Layout>
        <CreatePost handleClick={() => setShowModal(true)} />
        {posts &&
          posts.map(({ name, body, userName, profilePicture, postId }) => {
            return (
              <Post
                name={name}
                userName={userName}
                body={body}
                profilePicture={profilePicture}
                postId={postId}
              />
            )
          })}
      </Layout>
      <CreatePostModal onClose={() => setShowModal(false)} show={showModal} />
    </div>
  )
}

export default Home
