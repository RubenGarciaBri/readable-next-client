import initialState from "./initialState"
import { SET_LIKE, STOP_LOADING_LIKES, DELETE_LIKE } from "./types"

const likesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_LIKE:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.payload.likeId]: action.payload,
        },
        allIds: !state.allIds.includes(action.payload.likeId)
          ? state.allIds.concat(action.payload.likeId)
          : state.allIds,
      }

    case DELETE_LIKE:
      const newById = { ...state.byId }

      delete newById[action.payload.likeId]
      const newAllIds = state.allIds.filter(
        (id: string) => id !== action.payload.likeId
      )

      return {
        byId: newById,
        allIds: newAllIds,
      }

    case STOP_LOADING_LIKES:
      return {
        ...state,
        loading: false,
      }

    default:
      return state
  }
}

export default likesReducer
