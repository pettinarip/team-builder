import { modalsTypes } from './actionTypes'

export const modalsActions = {
  showAddPlayerModal: modalType => ({
    type: modalsTypes.SHOW_MODAL,
    modalType: 'NEW_PLAYER',
    modalProps: {}
  }),

  hideModal: () => ({
    type: modalsTypes.HIDE_MODAL
  })
}
