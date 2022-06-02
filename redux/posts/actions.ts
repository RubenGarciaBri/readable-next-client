import axios from "axios"

import { SET_POST, STOP_LOADING_POSTS } from "./types"

export const getPosts = () => (dispatch: any) => {
  axios
    .get("/api/posts")
    .then(res => {
      const posts = res.data
      console.log({ posts })
      posts.forEach((post: any) => {
        dispatch({
          type: SET_POST,
          payload: post,
        })
      })

      dispatch({
        type: STOP_LOADING_POSTS,
      })
    })
    .catch(err => console.log(err))

  dispatch({
    type: STOP_LOADING_POSTS,
  })
}

export const addPost = (text: string, userName: string) => (dispatch: any) => {
  const post = {
    body: text,
    commentIds: [],
    createdAt: new Date().toISOString(),
    likeIds: [],
    authorId: userName,
  }

  axios
    .post("/api/posts", post)
    .then(res => {
      console.log(res.data)
      dispatch({
        type: SET_POST,
        payload: res.data,
      })
    })
    .catch(err => console.log(err))
}
