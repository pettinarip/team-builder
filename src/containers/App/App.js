import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import * as actions from 'core/auth/actions'
import App from 'components/App'

const AppContainer = ({ signOut }) => (
  <App signOut={signOut} />
)

AppContainer.propTypes = {
  signOut: PropTypes.func.isRequired
}

export default connect(
  null,
  actions
)(AppContainer)
