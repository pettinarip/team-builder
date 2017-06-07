import { layoutsReducer } from '../reducer'
import { layoutsTypes } from '../actionTypes'
import * as layouts from '../selectors'

describe('layouts reducer', () => {
  it('should handle initial state', () => {
    expect(
      layoutsReducer(undefined, {})
    ).toEqual({
      selectedId: -1,
      byId: {},
      ids: []
    })
  })

  describe('when layouts are received', () => {
    let state

    beforeEach(() => {
      state = layoutsReducer({
        selectedId: -1,
        byId: {},
        ids: []
      }, {
        type: layoutsTypes.LOAD_LAYOUTS_SUCCESS,
        layouts: [{
          id: 1,
          config: [4, 4, 2]
        }, {
          id: 2,
          config: [3, 5, 2]
        }]
      })
    })

    it('should contains the layouts from the action', () => {
      expect(layouts.getLayout(state, 1)).toEqual({
        id: 1,
        config: [4, 4, 2]
      })
      expect(layouts.getLayout(state, 2)).toEqual({
        id: 2,
        config: [3, 5, 2]
      })
    })

    it('should contains no other layout', () => {
      expect(layouts.getLayout(state, 3)).toEqual(undefined)
    })

    it('should list all layouts', () => {
      expect(layouts.getLayoutsList(state)).toEqual([
        {
          id: 1,
          config: [4, 4, 2]
        }, {
          id: 2,
          config: [3, 5, 2]
        }
      ])
    })
  })

  describe('when a layout is selected', () => {
    let state

    beforeEach(() => {
      state = layoutsReducer({
        selectedId: -1,
        byId: {
          1: {
            id: 1,
            config: [4, 4, 2]
          }
        },
        ids: [1]
      }, {
        type: layoutsTypes.SELECT_LAYOUT,
        id: 1
      })
    })

    it('should set the layout id as the selectedId', () => {
      expect(layouts.getActiveLayout(state).id).toEqual(1)
    })
  })
})
