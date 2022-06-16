import axios from "axios"

import { SET_POST, STOP_LOADING_POSTS, LIKE_POST, UNLIKE_POST } from "./types"
import { SET_LIKE, DELETE_LIKE } from "../likes/types"
import { samplePosts } from "../../data/samplePosts"

const offline = process.env.NEXT_PUBLIC_OFFLINE

export const getPosts = () => (dispatch: any) => {
  if (!offline) {
    axios
      .get("/api/posts")
      .then(res => {
        const posts = res.data
        // console.log({ posts })
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
      .catch(err => console.error(err))
  } else {
    samplePosts.forEach((post: any) => {
      dispatch({
        type: SET_POST,
        payload: post,
      })
    })
  }
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
    .post("/api/post", post)
    .then(res => {
      dispatch({
        type: SET_POST,
        payload: res.data,
      })
    })
    .catch(err => console.error(err))
}

export const likePost = (postId: string, email: string) => (dispatch: any) => {
  console.log(postId, email)
  axios
    .post(`/api/post/like`, { postId, email })
    .then(res => {
      console.log(res.data)
      dispatch({
        type: LIKE_POST,
        payload: res.data,
      })
      dispatch({
        type: SET_LIKE,
        payload: res.data,
      })
    })
    .catch(err => console.error(err))
}

export const unlikePost =
  (postId: string, likeId: string) => (dispatch: any) => {
    axios
      .delete(`/api/post/like`, { data: { postId, likeId } })
      .then(res => {
        // dispatch({
        //   type: UNLIKE_POST,
        //   payload: res.data,
        // })
        // dispatch({
        //   type: DELETE_LIKE,
        //   payload: res.data,
        // })
      })
      .catch(err => console.error(err))
  }
