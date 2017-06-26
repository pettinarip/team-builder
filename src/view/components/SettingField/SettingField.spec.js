import React from 'react'
import { shallow } from 'enzyme'
import SettingField from './SettingField'

describe('SettingField component', () => {
  it('should render the component properly', () => {
    const component = mountSettingField()
    expect(component).toMatchSnapshot()
  })

  it('should render title text and add a padding class', () => {
    const component = mountSettingField({
      title: 'Testing title!'
    })
    expect(component).toMatchSnapshot()
  })

  it('should render children node', () => {
    const component = mountSettingField({
      children: <div />
    })
    expect(component).toMatchSnapshot()
  })
})

function mountSettingField (props) {
  const propsToUse = {
    title: '',
    children: null,
    ...props
  }

  return shallow(<SettingField {...propsToUse} />)
}
