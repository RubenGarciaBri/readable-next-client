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
    <>
      {/* <button onClick={() => setShowModal(true)}>Open Modal</button> */}
      <Layout>
        <CreatePost handleClick={() => setShowModal(true)} />
        {posts &&
          posts.map(
            (
              {
                name,
                body,
                userName,
                profilePicture,
                postId,
                timestamp,
                likesCount,
                commentsCount,
              },
              index
            ) => {
              return (
                <div key={index + name}>
                  <Post
                    name={name}
                    userName={userName}
                    body={body}
                    profilePicture={profilePicture}
                    postId={postId}
                    timestamp={timestamp}
                    likesCount={likesCount}
                    commentsCount={commentsCount}
                  />
                </div>
              )
            }
          )}
      </Layout>
      <CreatePostModal onClose={() => setShowModal(false)} show={showModal} />
    </>
  )
}

export default Home
