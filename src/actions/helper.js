export const createAsyncAction = (actionType, promise) => {
  return (...args) => dispatch => {
    dispatch({
      type: `${actionType}_REQUEST`,
      payload: args
    })

    return promise(...args).then(
      response => {
        dispatch({
          type: `${actionType}_SUCCESS`,
          response
        })
      },
      error => {
        dispatch({
          type: `${actionType}_FAILURE`,
          errorMessage: error.message || 'Something went wrong.'
        })
      }
    )
  }
}
