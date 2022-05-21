import { createSelector } from "reselect"
import { AppState } from "../store/rootReducer"

const getAllPostIds = (state: AppState) => {
  return state.posts.allIds
}

const getPostById = (state: AppState, stateId: string) => {
  return state.posts.byId[stateId]
}

const getPostLoading = (state: AppState) => {
  return state.posts.loading
}

const getPostError = (state: AppState) => {
  return state.posts.error
}

export const getAllPostIdsSelector = () =>
  createSelector(
    (state: AppState) => getAllPostIds(state),
    allIds => allIds
  )

export const getPostByIdSelector = (stateId: string) =>
  createSelector(
    (state: AppState) => getPostById(state, stateId),
    post => post
  )

export const getPostLoadingSelector = () =>
  createSelector(
    (state: AppState) => getPostLoading(state),
    loading => loading
  )

export const getPostErrorSelector = () =>
  createSelector(
    (state: AppState) => getPostError(state),
    error => error
  )
