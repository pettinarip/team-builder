import { playersTypes } from './actionTypes'

export const playersActions = {
  addPlayer: ({ name, number }) => ({
    type: playersTypes.ADD_PLAYER_REQUEST,
    player: {
      name,
      number
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

  updatePlayerSuccess: player => ({
    type: playersTypes.UPDATE_PLAYER_SUCCESS,
    player
  }),

  removePlayerSuccess: player => ({
    type: playersTypes.REMOVE_PLAYER_SUCCESS,
    player
  }),

  loadPlayersSuccess: players => ({
    type: playersTypes.LOAD_PLAYERS_SUCCESS,
    players
  })
}
