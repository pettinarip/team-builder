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
          number: 1,
          active: false
        }
      })
    })

    it('should contains the player from the action', () => {
      expect(players.getPlayer(state, 1)).toEqual({
        id: 1,
        name: 'Player',
        number: 1,
        active: false
      })
    })

    it('should contains no other player', () => {
      expect(players.getPlayer(state, 2)).toEqual(undefined)
    })

    it('should start in inactive mode', () => {
      expect(players.getPlayer(state, 1).active).toEqual(false)
    })
  })

  describe('when a new player position is added', () => {
    let state

    beforeEach(() => {
      state = playersReducer({
        byId: {
          1: {
            id: 1,
            name: 'Player',
            number: 1,
            active: false
          },
          2: {
            id: 2,
            name: 'Player',
            number: 2,
            active: false
          }
        },
        ids: [1, 2]
      }, {
        type: positionsTypes.ADD_PLAYER_POSITION,
        id: 1
      })
    })

    it('should change to active mode', () => {
      expect(players.getPlayer(state, 1).active).toEqual(true)
    })

    it('should not change other player active mode', () => {
      expect(players.getPlayer(state, 2).active).toEqual(false)
    })
  })

  describe('when a player position is removed', () => {
    let state

    beforeEach(() => {
      state = playersReducer({
        byId: {
          1: {
            id: 1,
            name: 'Player',
            number: 1,
            active: true
          },
          2: {
            id: 2,
            name: 'Player',
            number: 2,
            active: true
          }
        },
        ids: [1, 2]
      }, {
        type: positionsTypes.REMOVE_PLAYER_POSITION,
        id: 1
      })
    })

    it('should change to inactive mode', () => {
      expect(players.getPlayer(state, 1).active).toEqual(false)
    })

    it('should not change other player active mode', () => {
      expect(players.getPlayer(state, 2).active).toEqual(true)
    })
  })

  describe('when the positions are reseted', () => {
    let state

    beforeEach(() => {
      state = playersReducer({
        byId: {
          1: {
            id: 1,
            name: 'Player',
            number: 1,
            active: true
          },
          2: {
            id: 2,
            name: 'Player',
            number: 2,
            active: true
          },
          3: {
            id: 3,
            name: 'Player',
            number: 3,
            active: false
          }
        },
        ids: [1, 2, 3]
      }, {
        type: positionsTypes.RESET_POSITIONS
      })
    })

    it('should change all players active mode to inactive', () => {
      expect(
        players.getPlayersList(state).map(player => player.active)
      ).toEqual(
        [false, false, false]
      )
    })
  })
})
