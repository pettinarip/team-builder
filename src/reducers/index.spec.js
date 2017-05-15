import * as selectors from './index'

describe('selectors', () => {
  describe('getPositions', () => {
    let state

    beforeEach(() => {
      state = {
        players: {
          byId: {
            1: { id: 1, name: 'Player 1' },
            2: { id: 2, name: 'Player 2' },
            3: { id: 3, name: 'Player 3' }
          },
          ids: [1, 2, 3]
        },
        positions: {
          2: 1,
          4: 2,
          5: null,
          9: 3,
          10: null
        }
      }
    })

    it('should return positions with their corresponding players', () => {
      expect(selectors.getPositions(state)).toEqual({
        2: { id: 1, name: 'Player 1' },
        4: { id: 2, name: 'Player 2' },
        9: { id: 3, name: 'Player 3' }
      })
    })

    it('should only return ocupied positions', () => {
      expect(selectors.getPositions(state)[1]).toEqual(undefined)
      expect(selectors.getPositions(state)[5]).toEqual(undefined)
    })
  })
})
