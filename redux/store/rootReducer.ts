import { combineReducers } from "redux"

import postsReducer from "../posts/reducer"

const rootReducer = combineReducers({
  posts: postsReducer,
})

export type AppState = ReturnType<typeof rootReducer>
export default rootReducer
