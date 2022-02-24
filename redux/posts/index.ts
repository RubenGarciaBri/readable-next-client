import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface PostsState {
  posts: any
}

const initialState: PostsState = {
  posts: [],
}

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    add: state => {
      state.posts.push("New Post")
    },
  },
})

export const { add } = postsSlice.actions

export default postsSlice.reducer
