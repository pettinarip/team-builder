export function isAuthenticated (state) {
  return state.auth.authenticated
}

export const getUser = state => state.user
