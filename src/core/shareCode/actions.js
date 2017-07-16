import { shareCodeTypes } from './actionTypes'

export const shareCodeActions = {
  newCodeSuccess: payload => ({
    type: shareCodeTypes.NEW_SHARE_CODE_SUCCESS,
    code: payload.name
  }),

  newCodeFailure: error => ({
    type: shareCodeTypes.NEW_SHARE_CODE_FAILURE,
    error
  }),

  generateShareCode: () => ({
    type: shareCodeTypes.NEW_SHARE_CODE
  }),

  loadShareCode: code => ({
    type: shareCodeTypes.LOAD_SHARE_CODE,
    code
  }),

  loadShareCodeSuccess: payload => ({
    type: shareCodeTypes.LOAD_SHARE_CODE_SUCCESS,
    payload
  }),

  loadShareCodeFailure: error => ({
    type: shareCodeTypes.LOAD_SHARE_CODE_FAILURE,
    error
  })
}
