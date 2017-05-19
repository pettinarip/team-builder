import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import * as actions from '../../actions'

import NewPlayerModal from '../../components/NewPlayerModal'

const NewPlayerModalContainer = ({ addPlayer, hideModal }) => (
  <NewPlayerModal
    onSave={addPlayer}
    onRequestClose={hideModal}
  />
)

NewPlayerModalContainer.propTypes = {
  addPlayer: PropTypes.func.isRequired,
  hideModal: PropTypes.func.isRequired
}

export default connect(
  (state, ownProps) => ownProps,
  actions
)(NewPlayerModalContainer)
