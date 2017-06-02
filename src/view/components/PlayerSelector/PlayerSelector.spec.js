import React from 'react'
import { shallow } from 'enzyme'

import PlayerSelector from './PlayerSelector'
import AddPlayerButton from '../AddPlayerButton'
import PlayerDraggable from '../PlayerDraggable'

describe('PlayerSelector component', () => {
  const addPlayer = () => {}
  const addPlayerPosition = () => {}
  const removePlayerPosition = () => {}

  it('should render an add player button', () => {
    const players = []
    const component = shallow(
      <PlayerSelector
        players={players}
        onAddPlayerClick={addPlayer}
        onAddPlayerPosition={addPlayerPosition}
        onRemovePlayerPosition={removePlayerPosition}
      />
    )

    expect(component.contains(<AddPlayerButton onClick={addPlayer} />)).toEqual(true)
  })

  it('should render all players', () => {
    const players = [{ id: 1 }, { id: 2 }, { id: 3 }]
    const component = shallow(
      <PlayerSelector
        players={players}
        onAddPlayerClick={addPlayer}
        onAddPlayerPosition={addPlayerPosition}
        onRemovePlayerPosition={removePlayerPosition}
      />
    )

    expect(component.find(PlayerDraggable).length).toEqual(3)
  })
})
