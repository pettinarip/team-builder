import React from 'react'
import PropTypes from 'prop-types'
import Modal from '../Modal'

const NewPlayerModal = ({ onSave, onRequestClose }) => (
  <Modal onRequestClose={onRequestClose}>
    Test
  </Modal>
)

NewPlayerModal.propTypes = {
  onSave: PropTypes.func.isRequired,
  onRequestClose: PropTypes.func.isRequired
}

export default NewPlayerModal
