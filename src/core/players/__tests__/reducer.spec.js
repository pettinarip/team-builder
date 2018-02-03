import { playersReducer } from '../reducer'
import * as players from '../selectors'
import { playersTypes } from '../actionTypes'
import { positionsTypes } from 'core/positions'

describe('players reducer', () => {
  it('should handle initial state', () => {
    expect(
      playersReducer(undefined, {})
    ).toEqual({ byId: {}, ids: [] })
  })

  describe('when new player is added', () => {
    let state

    beforeEach(() => {
      state = playersReducer({
        byId: {},
        ids: []
      }, {
        type: playersTypes.ADD_PLAYER_SUCCESS,
        player: {
          id: 1,
          name: 'Player',
          number: 1
        }
      })
    })

    it('should contains the player from the action', () => {
      expect(players.getPlayer(state, 1)).toEqual({
        id: 1,
        name: 'Player',
        number: 1
      })
    })

    it('should contains no other player', () => {
      expect(players.getPlayer(state, 2)).toEqual(undefined)
    })
  })
})
