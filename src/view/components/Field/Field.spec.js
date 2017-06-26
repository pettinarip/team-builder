import React from 'react'
import { shallow } from 'enzyme'
import Field from './Field'

describe('Field component', () => {
  it('should render the component properly', () => {
    const component = mountField({
      layout: {id: 1, config: [4, 4, 2]},
      playersPositions: {1: 1}
    })

    expect(component).toMatchSnapshot()
  })

  it('should not render layout component if no layout is passed', () => {
    const component = mountField({
      playersPositions: {1: 1}
    })

    expect(component).toMatchSnapshot()
  })
})

function mountField (props = {}) {
  const propsToUse = {
    addPlayer () {},
    removePlayer () {},
    layout: undefined,
    playersPositions: {},
    ...props
  }

  return shallow(<Field {...propsToUse} />)
}
