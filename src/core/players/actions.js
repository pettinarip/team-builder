import { playersTypes } from './actionTypes'

export const playersActions = {
  addPlayer: ({ name, number }) => ({
    type: playersTypes.ADD_PLAYER_REQUEST,
    player: {
      name,
      number,
      active: false
    }
  }),

  addPlayerSuccess: player => ({
    type: playersTypes.ADD_PLAYER_SUCCESS,
    player
  }),

  addPlayerFailure: error => ({
    type: playersTypes.ADD_PLAYER_FAILURE,
    error
  }),

  loadPlayersSuccess: players => ({
    type: playersTypes.LOAD_PLAYERS_SUCCESS,
    players
  })
}
