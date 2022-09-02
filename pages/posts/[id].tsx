import * as React from "react"

import { useRouter } from "next/router"

import { Layout } from "../../components/Root"

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <Layout>
        <div>Post id: {id}</div>
      </Layout>
    </>
  )
}

export default Post
