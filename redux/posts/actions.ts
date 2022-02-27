import axios from "axios"

import { SET_POST, STOP_LOADING_POSTS } from "./types"

// export const getAllPosts = (payload: any) => ({
//   type: SET_POSTS,
//   payload,
// })

export const getPosts = () => (dispatch: any) => {
  axios
    .get("/api/posts")
    .then(res => {
      const posts = res.data
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
}
