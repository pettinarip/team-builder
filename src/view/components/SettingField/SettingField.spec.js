import React from 'react'
import { shallow } from 'enzyme'

import SettingField from './SettingField'

describe('SettingField component', () => {
  let component
  let children
  let title

  beforeEach(() => {
    children = <div />
    title = 'title'
    component = shallow(
      <SettingField title={title}>
        {children}
      </SettingField>
    )
  })

  it('should render title text', () => {
    expect(component.contains(title)).toBe(true)
  })

  it('should render children node', () => {
    expect(component.contains(children)).toBe(true)
  })
})
