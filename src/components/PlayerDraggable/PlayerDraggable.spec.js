import React from 'react'
import { shallow } from 'enzyme'

import PlayerDraggable from './PlayerDraggable'

describe('PlayerDraggable component', () => {
  let OriginalPlayerDraggable

  beforeEach(() => {
    OriginalPlayerDraggable = PlayerDraggable.DecoratedComponent
  })

  it('should render the number', () => {
    const number = 1
    const component = shallow(
      <OriginalPlayerDraggable connectDragSource={el => el} number={number} />
    )

    expect(component.contains(number)).toBe(true)
  })

  it('should render the name on title prop', () => {
    const name = 'Player 1'
    const component = shallow(
      <OriginalPlayerDraggable connectDragSource={el => el} name={name} />
    )

    expect(component.props().title).toEqual(name)
  })

  it('should render the classname passed', () => {
    const className = 'test'
    const component = shallow(
      <OriginalPlayerDraggable connectDragSource={el => el} className={className} />
    )

    expect(component.find('.player').hasClass(className)).toBe(true)
  })
})
