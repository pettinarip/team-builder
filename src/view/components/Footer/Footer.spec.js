import React from 'react'
import { shallow } from 'enzyme'
import Footer from './Footer'

describe('Footer component', () => {
  it('should render the component properly', () => {
    const component = shallow(<Footer />)
    expect(component).toMatchSnapshot()
  })
})
