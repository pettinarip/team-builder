import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import * as actions from 'core/auth/actions'

import Builder from 'view/components/Builder'

const AppContainer = ({ signOut }) => (
  <Builder signOut={signOut} />
)

AppContainer.propTypes = {
  signOut: PropTypes.func.isRequired
}

export default connect(
  null,
  actions
)(AppContainer)
