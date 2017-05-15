import reducer, * as positions from './positions'
import * as types from '../constants/ActionTypes'

describe('positions reducer', () => {
  it('should handle initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({})
  })

  describe('when new player position is added', () => {
    let state

    beforeEach(() => {
      state = reducer({
        1: 3,
        3: null
      }, {
        type: types.ADD_PLAYER_POSITION,
        id: 1,
        position: 2
      })
    })

    it('should insert the player id in the position', () => {
      expect(state[2]).toEqual(1)
    })

    it('should only modify the action position', () => {
      expect(state[1]).toEqual(3)
      expect(state[3]).toEqual(null)
    })
  })

  describe('when a player position is removed', () => {
    let state

    beforeEach(() => {
      state = reducer({
        1: 3,
        2: 1,
        3: null
      }, {
        type: types.REMOVE_PLAYER_POSITION,
        position: 2
      })
    })

    it('should empty the position', () => {
      expect(state[2]).toEqual(null)
    })

    it('should only modify the action position', () => {
      expect(state[1]).toEqual(3)
      expect(state[3]).toEqual(null)
    })
  })

  describe('when a player position is cleaned', () => {
    let state

    beforeEach(() => {
      state = reducer({
        1: 3,
        2: 1,
        3: null
      }, {
        type: types.CLEAN_PLAYER_POSITION,
        position: 2
      })
    })

    it('should empty the position', () => {
      expect(state[2]).toEqual(null)
    })

    it('should only modify the action position', () => {
      expect(state[1]).toEqual(3)
      expect(state[3]).toEqual(null)
    })
  })

  describe('when the positions are reseted', () => {
    let state

    beforeEach(() => {
      state = reducer({
        1: 3,
        2: 1,
        3: null
      }, {
        type: types.RESET_POSITIONS
      })
    })

    it('should clear all of the positions', () => {
      expect(state).toEqual({})
    })
  })
})
