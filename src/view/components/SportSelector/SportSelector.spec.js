import React from 'react'
import { shallow } from 'enzyme'
import SportSelector from './SportSelector'

describe('SportSelector component', () => {
  it('should render the component properly', () => {
    const component = shallow(<SportSelector />)
    expect(component).toMatchSnapshot()
  })
})
