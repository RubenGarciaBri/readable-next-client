import { createSelector } from "reselect"
import { AppState } from "../store/rootReducer"

export const getLikesFromLikeIdsSelector = (likeIds: Array<string>) =>
  createSelector(
    (state: AppState) => likeIds.map((id: string) => state.likes.byId[id]),
    likes => likes
  )

export const getHasLikedSelector = (likeIds: Array<string>, email:string) =>
  createSelector(
    (state: AppState) => likeIds.map((id: string) => state.likes.byId[id]),
    likes => likes
  )
