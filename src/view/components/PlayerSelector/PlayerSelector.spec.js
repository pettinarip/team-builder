import React from 'react'
import { shallow } from 'enzyme'
import PlayerSelector from './PlayerSelector'

describe('PlayerSelector component', () => {
  it('should render an add player button', () => {
    const component = mountPlayerSelector()
    expect(component).toMatchSnapshot()
  })

  it('should render all players', () => {
    const players = [{ id: 1 }, { id: 2 }, { id: 3 }]
    const component = mountPlayerSelector({
      players
    })

    expect(component).toMatchSnapshot()
  })
})

function mountPlayerSelector (props) {
  const propsToUse = {
    onAddPlayerClick () {},
    onAddPlayerPosition () {},
    onRemovePlayerPosition () {},
    players: [],
    ...props
  }

  return shallow(<PlayerSelector {...propsToUse} />)
}
