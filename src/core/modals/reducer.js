import { modalsTypes } from './actionTypes'

const initialState = {
  modalType: null,
  modalProps: {}
}

export const modalsReducer = (state = initialState, action) => {
  switch (action.type) {
    case modalsTypes.SHOW_MODAL:
      return {
        modalType: action.modalType,
        modalProps: action.modalProps
      }
    case modalsTypes.HIDE_MODAL:
      return initialState
    default:
      return state
  }
}
