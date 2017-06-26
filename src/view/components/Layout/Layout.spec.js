import React from 'react'
import { shallow } from 'enzyme'
import Layout from './Layout'

describe('Layout component', () => {
  it('should render the component properly', () => {
    const config = [4, 4, 2]
    const component = mountLayout({
      config,
      playersPositions: {1: 1}
    })

    expect(component).toMatchSnapshot()
  })
})

function mountLayout (props) {
  const propsToUse = {
    addPlayer () {},
    removePlayer () {},
    config: {},
    playersPositions: {},
    ...props
  }

  return shallow(<Layout {...propsToUse} />)
}
