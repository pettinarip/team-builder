import { createSelector } from 'reselect'

export const getCode = state => state.code

export const getShareCode = createSelector(
  getCode,
  code => code ? `${window.location.origin}/view/${code}` : null
)
