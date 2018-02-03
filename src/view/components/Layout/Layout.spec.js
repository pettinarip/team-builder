import React from 'react'
import { shallow } from 'enzyme'
import Layout from './Layout'

describe('Layout component', () => {
  it('should render the component properly', () => {
    const config = [
      { x: 10, y: 10 },
      { x: 10, y: 20 },
      { x: 10, y: 30 }
    ]
    const component = mountLayout({
      config,
      playersPositions: {1: 1}
    })

    expect(component).toMatchSnapshot()
  })
})

function mountLayout (props) {
  const propsToUse = {
    updatePosition () {},
    switchPosition () {},
    config: {},
    playersPositions: {},
    ...props
  }

  const OriginalLayout = Layout.DecoratedComponent
  const identity = el => el;

  return shallow(<OriginalLayout {...propsToUse} connectDropTarget={identity} />)
}
