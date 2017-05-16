import React from 'react'
import { shallow } from 'enzyme'

import PlayerDroppable from './PlayerDroppable'
import PlayerDraggable from '../PlayerDraggable'

describe('PlayerDroppable component', () => {
  it('should render a PlayerDraggable component', () => {
    const OriginalPlayerDroppable = PlayerDroppable.DecoratedComponent
    const component = shallow(
      <OriginalPlayerDroppable
        position={1}
        connectDropTarget={el => el}
        isOver={false}
        addPlayer={() => {}}
        removePlayer={() => {}}
      />
    )

    expect(component.find(PlayerDraggable).length).toEqual(1)
  })
})
