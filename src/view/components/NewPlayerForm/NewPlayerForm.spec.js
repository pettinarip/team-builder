import React from 'react'
import { noop } from 'lodash'
import renderer from 'react-test-renderer'
import { createStore } from 'redux'
import {Provider} from 'react-redux'
import { reducer as formReducer } from 'redux-form'

import NewPlayerForm from './NewPlayerForm'

const mockFormStore = (initialState = {}) => {
  const store = createStore((state = initialState, action) => {
    return {
      ...state,
      form: formReducer(state.form, action)
    }
  })

  return store
}

describe('NewPlayerForm component', () => {
  it('should render correctly', () => {
    const store = mockFormStore()

    const component = renderer.create(
      <Provider store={store}>
        <NewPlayerForm onSave={noop} />
      </Provider>
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  // it('should call onSave on submit', () => {
  //   const store = mockFormStore()
  //   const onSave = jest.fn()
  //
  //   const wrapper = mount(
  //     <Provider store={store}>
  //       <NewPlayerForm onSubmit={onSave} />
  //     </Provider>
  //   )
  //
  //   wrapper.find('form').simulate('submit')
  //   expect(onSave).toHaveBeenCalled()
  // })
})
