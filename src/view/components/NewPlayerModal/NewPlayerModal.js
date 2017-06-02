import React from 'react'
import PropTypes from 'prop-types'

import Modal from '../Modal'
import NewPlayerForm from '../NewPlayerForm'

const NewPlayerModal = ({ onSave, onRequestClose }) => (
  <Modal onRequestClose={onRequestClose}>
    <NewPlayerForm onSubmit={onSave} />
  </Modal>
)

NewPlayerModal.propTypes = {
  onSave: PropTypes.func.isRequired,
  onRequestClose: PropTypes.func.isRequired
}

export default NewPlayerModal
