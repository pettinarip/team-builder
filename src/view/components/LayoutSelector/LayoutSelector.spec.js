import React from 'react'
import { shallow } from 'enzyme'
import LayoutSelector from './LayoutSelector'

describe('LayoutSelector component', () => {
  it('should render the component properly', () => {
    const component = mountLayoutSelector({
      layouts: [{
        id: 1,
        config: [4, 4, 2]
      }, {
        id: 2,
        config: [3, 5, 2]
      }]
    })

    expect(component).toMatchSnapshot()
  })

  it('should call onLayoutClick function when a layout is clicked', () => {
    const layoutClick = jest.fn()
    const component = mountLayoutSelector({
      layouts: [{
        id: 1,
        config: [4, 4, 2]
      }],
      onLayoutClick: layoutClick
    })

    component.find('.layout-description').simulate('click')
    expect(layoutClick).toHaveBeenCalled()
  })

  it('should set selected class when a selected layout is passed', () => {
    const component = mountLayoutSelector({
      layouts: [{
        id: 1,
        config: [4, 4, 2]
      }, {
        id: 2,
        config: [4, 4, 2]
      }],
      selected: {
        id: 1,
        config: [4, 4, 2]
      }
    })

    expect(component).toMatchSnapshot()
  })
})

function mountLayoutSelector (props) {
  const propsToUse = {
    onLayoutClick () {},
    layouts: [],
    ...props
  }

  return shallow(<LayoutSelector {...propsToUse} />)
}
