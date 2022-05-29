import axios from "axios"

import { SET_POST, STOP_LOADING_POSTS } from "./types"

export const getPosts = () => (dispatch: any) => {
  axios
    .get("/api/posts")
    .then(res => {
      const posts = res.data
      console.log({posts})
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
