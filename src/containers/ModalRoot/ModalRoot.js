import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import NewPlayerModal from '../NewPlayerModalContainer'

const MODAL_COMPONENTS = {
  'NEW_PLAYER': NewPlayerModal
}

const ModalRoot = ({ modalType, modalProps }) => {
  if (!modalType) {
    return null
  }

  const SpecificModal = MODAL_COMPONENTS[modalType]
  return <SpecificModal {...modalProps} />
}

ModalRoot.propTypes = {
  modalType: PropTypes.string,
  modalProps: PropTypes.object
}

export default connect(
  state => state.modals
)(ModalRoot)
