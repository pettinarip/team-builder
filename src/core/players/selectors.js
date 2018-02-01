import { createSelector } from 'reselect'

const getIdsState = state => state.ids
const getByIdState = state => state.byId

export const getPlayer = (state, id) =>
  getByIdState(state)[id]

export const getPlayersById = getByIdState

export const getPlayersList = createSelector(
  getIdsState,
  getByIdState,
  (ids, byId) => ids.map(id => byId[id])
)
