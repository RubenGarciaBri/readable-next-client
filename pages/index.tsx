import * as React from "react"

import type { NextPage } from "next"
import Image from "next/image"
import styles from "../styles/Home.module.css"

import Layout from "../components/Root/Layout"

const Home: NextPage = () => {
  return (
    <div>
      <Layout>
        <p>Hello</p>
      </Layout>
    </div>
  )
}

export default Home
