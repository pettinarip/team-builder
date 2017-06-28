import React from 'react'
import { shallow } from 'enzyme'
import Header from './Header'

describe('Header component', () => {
  it('should render the component properly', () => {
    const component = mountHeader()
    expect(component).toMatchSnapshot()
  })
})

function mountHeader (props) {
  const propsToUse = {
    signOut () {},
    authenticated: false,
    ...props
  }

  return shallow(<Header {...propsToUse} />)
}
