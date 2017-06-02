import React from 'react'
import ReactModal from 'react-modal'
import PropTypes from 'prop-types'

const baseStyles = {
  overlay: {
    backgroundColor: 'rgba(255,255,255,0.3)'
  },
  content: {
    top: '30%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: 0,
    border: 0,
    padding: 0,
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.25)'
  }
}

const Modal = ({ onRequestClose, children, ...props }) => (
  <ReactModal
    isOpen
    contentLabel='Modal'
    onRequestClose={onRequestClose}
    style={baseStyles}
    {...props}
  >
    {children}
  </ReactModal>
)

Modal.propTypes = {
  onRequestClose: PropTypes.func.isRequired,
  children: PropTypes.node
}

export default Modal
