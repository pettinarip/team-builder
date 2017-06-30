import { shareCodeTypes } from './actionTypes'

export const shareCodeActions = {
  newCodeSuccess: payload => ({
    type: shareCodeTypes.NEW_SHARE_CODE_SUCCESS,
    code: payload.id
  }),

  newCodeFailure: code => ({
    type: shareCodeTypes.NEW_SHARE_CODE_FAILURE
  }),

  generateShareCode: () => ({
    type: shareCodeTypes.NEW_SHARE_CODE
  })
}
