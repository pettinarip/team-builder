import { connect } from 'react-redux'

import { isAuthenticated, authActions } from 'core/auth'
import { getAuthUser } from 'core/selectors'

import AccountInfo from 'view/components/AccountInfo'

const mapStateToProps = (state) => ({
  user: getAuthUser(state),
  authenticated: isAuthenticated(state)
})

export default connect(
  mapStateToProps,
  authActions
)(AccountInfo)
