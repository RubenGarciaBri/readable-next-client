import initialState from "./initialState"
import { SET_POST, STOP_LOADING_POSTS, LIKE_POST, UNLIKE_POST } from "./types"

const postsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_POST:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.payload.id]: action.payload,
        },
        allIds: !state.allIds.includes(action.payload.id)
          ? state.allIds.concat(action.payload.id)
          : state.allIds,
      }

    case LIKE_POST:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.payload.postId]: {
            ...state.byId[action.payload.postId],
            likeIds: [
              ...state.byId[action.payload.postId].likeIds,
              action.payload.id,
            ],
          },
        },
      }

    case UNLIKE_POST:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.payload.postId]: {
            ...state.byId[action.payload.postId],
            likeIds: state.byId[action.payload.postId].likeIds.filter(
              (likeId: string) => likeId !== action.payload.likeId
            ),
          },
        },
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
