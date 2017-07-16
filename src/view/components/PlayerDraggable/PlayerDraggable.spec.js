import React from 'react'
import { shallow } from 'enzyme'

import PlayerDraggable from './PlayerDraggable'

describe('PlayerDraggable component', () => {
  let OriginalPlayerDraggable

  beforeEach(() => {
    OriginalPlayerDraggable = PlayerDraggable.DecoratedComponent
  })

  it('should render the classname passed', () => {
    const className = 'test'
    const component = shallow(
      <OriginalPlayerDraggable connectDragSource={el => el} className={className} />
    )

    expect(component.find('.player').hasClass(className)).toBe(true)
  })
})
