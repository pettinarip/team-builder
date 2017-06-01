import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { playersActions } from 'core/players'
import { hideModal } from 'actions'

import NewPlayerModal from 'view/components/NewPlayerModal'

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

const mapDispatchToProps = {
  addPlayer: playersActions.addPlayer,
  hideModal: hideModal
}

export default connect(
  (state, ownProps) => ownProps,
  mapDispatchToProps
)(NewPlayerModalContainer)
