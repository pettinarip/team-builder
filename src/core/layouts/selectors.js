import { createSelector } from 'reselect'

const getIdsState = state => state.ids
const getByIdState = state => state.byId
const getSelectedId = state => state.selectedId

export const getLayout = (state, id) =>
  getByIdState(state)[id]

export const getActiveLayout = state =>
  getByIdState(state)[getSelectedId(state)]

export const getLayoutsList = createSelector(
  getIdsState,
  getByIdState,
  (ids, byId) => ids.map(id => byId[id])
)
