import React from 'react'
import { shallow } from 'enzyme'
import AddPlayerButton from './AddPlayerButton'

describe('AddPlayerButton component', () => {
  it('should render the component properly', () => {
    const component = shallow(
      <AddPlayerButton onClick={() => null} />
    )

    expect(component).toMatchSnapshot()
  })

  it('should call onClick function when clicked', () => {
    const addPlayer = jest.fn()
    const component = shallow(
      <AddPlayerButton onClick={addPlayer} />
    )
    component.simulate('click')
    expect(addPlayer).toHaveBeenCalled()
  })
})
