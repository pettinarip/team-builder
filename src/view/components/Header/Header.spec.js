import React from 'react'
import { shallow } from 'enzyme'
import Header from './Header'

describe('Header component', () => {
  it('should render the component properly', () => {
    const component = mountHeader()
    expect(component).toMatchSnapshot()
  })

  it('should render the sign out button if it is authenticated', () => {
    const component = mountHeader({
      authenticated: true
    })
    expect(component).toMatchSnapshot()
  })

  it('should call sign out function when sign out button is clicked', () => {
    const signOutFn = jest.fn()
    const component = mountHeader({
      authenticated: true,
      signOut: signOutFn
    })

    component.find('button').simulate('click')
    expect(signOutFn).toHaveBeenCalled()
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
