import { connect } from 'react-redux'

import { isAuthenticated, authActions } from 'core/auth'
import { getUserName } from 'core/selectors'

import AccountInfo from 'view/components/AccountInfo'

const mapStateToProps = (state) => ({
  name: getUserName(state),
  authenticated: isAuthenticated(state)
})

export default connect(
  mapStateToProps,
  authActions
)(AccountInfo)
