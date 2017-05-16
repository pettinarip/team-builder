import React from 'react'
import { shallow } from 'enzyme'
import LayoutSelector from './LayoutSelector'

describe('LayoutSelector component', () => {
  let layoutClick

  beforeEach(() => {
    layoutClick = jest.fn()
  })

  it('should list all layouts', () => {
    const component = shallow(
      <LayoutSelector
        layouts={[{
          id: 1,
          config: [4, 4, 2]
        }, {
          id: 2,
          config: [3, 5, 2]
        }]}
        onLayoutClick={layoutClick}
      />
    )

    expect(component.find('.item').length).toEqual(2)
  })

  it('should call onLayoutClick function when a layout is clicked', () => {
    const component = shallow(
      <LayoutSelector
        layouts={[{
          id: 1,
          config: [4, 4, 2]
        }]}
        onLayoutClick={layoutClick}
      />
    )

    component.find('.layout-description').simulate('click')
    expect(layoutClick).toHaveBeenCalled()
  })

  it('should set selected class when a selected layout is passed', () => {
    const component = shallow(
      <LayoutSelector
        layouts={[{
          id: 1,
          config: [4, 4, 2]
        }, {
          id: 2,
          config: [4, 4, 2]
        }]}
        selected={{
          id: 1,
          config: [4, 4, 2]
        }}
        onLayoutClick={layoutClick}
      />
    )

    expect(component.find('.selected').length).toEqual(1)
  })

  it('should not set selected class when a selected layout is not passed', () => {
    const component = shallow(
      <LayoutSelector
        layouts={[{
          id: 1,
          config: [4, 4, 2]
        }, {
          id: 2,
          config: [4, 4, 2]
        }]}
        onLayoutClick={layoutClick}
      />
    )

    expect(component.find('.selected').length).toEqual(0)
  })
})
