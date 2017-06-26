import React from 'react'
import { shallow } from 'enzyme'
import NewPlayerForm from './NewPlayerForm'

describe('NewPlayerForm component', () => {
  it('should render the component properly', () => {
    const component = mountForm()
    expect(component).toMatchSnapshot()
  })

  it('should call handleSubmit on submit', () => {
    const handleSubmit = jest.fn()
    const component = mountForm({
      handleSubmit
    })

    component.find('form').simulate('submit')
    expect(handleSubmit).toHaveBeenCalled()
  })
})

function mountForm (props) {
  const propsToUse = {
    handleSubmit () {},
    ...props
  }

  return shallow(<NewPlayerForm {...propsToUse} />)
}
