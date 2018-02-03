import { positionsReducer } from '../reducer'
import { positionsTypes } from '../actionTypes'

describe('positions reducer', () => {
  it('should handle initial state', () => {
    expect(
      positionsReducer(undefined, {})
    ).toEqual({})
  })

  describe('when new player position is added', () => {
    let state

    beforeEach(() => {
      state = positionsReducer({
        1: 3
      }, {
        type: positionsTypes.ADD_PLAYER_POSITION,
        id: 1,
        position: 2
      })
    })

    it('should insert the player id in the position', () => {
      expect(state[2]).toEqual(1)
    })

    it('should only modify the action position', () => {
      expect(state[1]).toEqual(3)
      expect(state[3]).toEqual(undefined)
    })
  })

  describe('when a player position is cleaned', () => {
    let state

    beforeEach(() => {
      state = positionsReducer({
        1: 3,
        2: 1
      }, {
        type: positionsTypes.CLEAN_PLAYER_POSITION,
        position: 2
      })
    })

    it('should empty the position', () => {
      expect(state[2]).toEqual(undefined)
    })

    it('should only modify the action position', () => {
      expect(state[1]).toEqual(3)
      expect(state[3]).toEqual(undefined)
    })
  })

  describe('when the positions are reseted', () => {
    let state

    beforeEach(() => {
      state = positionsReducer({
        1: 3,
        2: 1
      }, {
        type: positionsTypes.RESET_POSITIONS
      })
    })

    it('should clear all of the positions', () => {
      expect(state).toEqual({})
    })
  })
})
