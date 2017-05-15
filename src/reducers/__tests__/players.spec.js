import reducer, * as players from '../players'
import * as types from '../../constants/ActionTypes'

describe('players reducer', () => {
  it('should handle initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({ byId: {}, ids: [] })
  })

  describe('when new player is added', () => {
    let state

    beforeEach(() => {
      state = reducer({
        byId: {},
        ids: []
      }, {
        type: types.ADD_PLAYER_SUCCESS,
        response: {
          id: 1,
          name: 'Player',
          number: 1,
          icon: '',
          active: false
        }
      })
    })

    it('should contains the player from the action', () => {
      expect(players.getPlayer(state, 1)).toEqual({
        id: 1,
        name: 'Player',
        number: 1,
        icon: '',
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
      state = reducer({
        byId: {
          1: {
            id: 1,
            name: 'Player',
            number: 1,
            icon: '',
            active: false
          },
          2: {
            id: 2,
            name: 'Player',
            number: 2,
            icon: '',
            active: false
          }
        },
        ids: [1, 2]
      }, {
        type: types.ADD_PLAYER_POSITION,
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
      state = reducer({
        byId: {
          1: {
            id: 1,
            name: 'Player',
            number: 1,
            icon: '',
            active: true
          },
          2: {
            id: 2,
            name: 'Player',
            number: 2,
            icon: '',
            active: true
          }
        },
        ids: [1, 2]
      }, {
        type: types.REMOVE_PLAYER_POSITION,
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
      state = reducer({
        byId: {
          1: {
            id: 1,
            name: 'Player',
            number: 1,
            icon: '',
            active: true
          },
          2: {
            id: 2,
            name: 'Player',
            number: 2,
            icon: '',
            active: true
          },
          3: {
            id: 3,
            name: 'Player',
            number: 3,
            icon: '',
            active: false
          }
        },
        ids: [1, 2, 3]
      }, {
        type: types.RESET_POSITIONS
      })
    })

    it('should change all players active mode to inactive', () => {
      expect(
        players.getAllPlayers(state).map(player => player.active)
      ).toEqual(
        [false, false, false]
      )
    })
  })
})
