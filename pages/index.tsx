import * as React from "react"

import type { NextPage } from "next"
import Layout from "../components/Root/Layout"
import CreatePost from "../components/CreatePost/CreatePost"

const Home: NextPage = () => {
  return (
    <div>
      <Layout>
        <CreatePost />
      </Layout>
    </div>
  )
}

export default Home
