import { combineReducers } from "redux"

import postsReducer from "../posts/reducer"
import likesReducer from "../likes/reducer"

const rootReducer = combineReducers({
  likes: likesReducer,
  posts: postsReducer,
})

export type AppState = ReturnType<typeof rootReducer>
export default rootReducer
