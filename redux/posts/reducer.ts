import initialState from "./initialState"
import { SET_POST, STOP_LOADING_POSTS } from "./types"

const postsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_POST:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.payload.id]: action.payload.data,
        },
        allIds: !state.allIds.includes(action.payload.id)
          ? state.allIds.concat(action.payload.id)
          : state.allIds,
      }

    case STOP_LOADING_POSTS:
      return {
        ...state,
        loading: false,
      }
    default:
      return state
  }
}

export default postsReducer
