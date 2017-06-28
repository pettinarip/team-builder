import React from 'react'
import { shallow } from 'enzyme'
import AccountInfo from './AccountInfo'

describe('AccountInfo component', () => {
  it('should render the component properly', () => {
    const component = mountAccountInfo()
    expect(component).toMatchSnapshot()
  })

  it('should show the user name', () => {
    const component = mountAccountInfo({
      name: 'Foo'
    })
    expect(component).toMatchSnapshot()
  })

  it('should render the sign out button if it is authenticated', () => {
    const component = mountAccountInfo({
      authenticated: true
    })
    expect(component).toMatchSnapshot()
  })

  it('should call sign out function when sign out button is clicked', () => {
    const signOutFn = jest.fn()
    const component = mountAccountInfo({
      authenticated: true,
      signOut: signOutFn
    })

    component.find('.button').simulate('click')
    expect(signOutFn).toHaveBeenCalled()
  })
})

function mountAccountInfo (props) {
  const propsToUse = {
    signOut () {},
    authenticated: false,
    ...props
  }

  return shallow(<AccountInfo {...propsToUse} />)
}
