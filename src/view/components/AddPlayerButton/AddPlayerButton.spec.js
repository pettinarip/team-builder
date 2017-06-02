import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import AddPlayerButton from './AddPlayerButton'

describe('AddPlayerButton component', () => {
  let addPlayer

  beforeEach(() => {
    addPlayer = jest.fn()
  })

  it('should render correctly', () => {
    const component = renderer.create(
      <AddPlayerButton onClick={() => null} />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should call onClick function when clicked', () => {
    const component = shallow(
      <AddPlayerButton onClick={addPlayer} />
    )
    component.simulate('click')
    expect(addPlayer).toHaveBeenCalled()
  })
})
