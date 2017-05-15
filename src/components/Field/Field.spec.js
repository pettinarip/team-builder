import React from 'react'
import { shallow } from 'enzyme'
import Field from './Field'

describe('Field component', () => {
  let addPlayer
  let removePlayer

  beforeEach(() => {
    addPlayer = jest.fn()
    removePlayer = jest.fn()
  })

  it('should render layout component', () => {
    const component = shallow(
      <Field
        layout={{id: 1, config: [4, 4, 2]}}
        playersPositions={{1: 1}}
        addPlayer={addPlayer}
        removePlayer={removePlayer}
      />
    )

    expect(component.find('Layout').length).toEqual(1)
  })

  it('should not render layout component if no layout is passed', () => {
    const component = shallow(
      <Field
        layout={undefined}
        playersPositions={{1: 1}}
        addPlayer={addPlayer}
        removePlayer={removePlayer}
      />
    )

    expect(component.find('Layout').length).toEqual(0)
  })
})
