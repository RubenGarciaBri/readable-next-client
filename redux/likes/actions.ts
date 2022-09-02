import axios from "axios"

import { SET_LIKE, STOP_LOADING_LIKES } from "./types"

export const getLikes = () => (dispatch: any) => {
  axios
    .get("/api/likes")
    .then(res => {
      const likes = res.data

      likes.forEach((like: any) => {
        dispatch({
          type: SET_LIKE,
          payload: like,
        })
      })

      dispatch({
        type: STOP_LOADING_LIKES,
      })
    })
    .catch(err => console.error(err))
}
