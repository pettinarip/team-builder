import React from 'react'
import { shallow } from 'enzyme'
import Layout from './Layout'
import PlayerDroppable from '../PlayerDroppable'

describe('Layout component', () => {
  let addPlayer
  let removePlayer

  beforeEach(() => {
    addPlayer = jest.fn()
    removePlayer = jest.fn()
  })

  it('should render the lines in the config count', () => {
    const config = [4, 4, 2]
    const component = shallow(
      <Layout
        config={config}
        playersPositions={{1: 1}}
        addPlayer={addPlayer}
        removePlayer={removePlayer}
      />
    )

    expect(component.find('.line').length).toEqual(3)
  })

  it('should render the config players count', () => {
    const config = [4, 4, 2]
    const component = shallow(
      <Layout
        config={config}
        playersPositions={{1: 1}}
        addPlayer={addPlayer}
        removePlayer={removePlayer}
      />
    )

    expect(component.find(PlayerDroppable).length).toEqual(10)
  })
})
