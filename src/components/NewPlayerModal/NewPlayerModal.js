import React from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import Modal from '../Modal'

const required = value => (value ? undefined : 'Required')
const between = (min, max) =>
  (value, previousValue) => value <= max && value >= min ? value : previousValue
const maxLength = max =>
  (value, previousValue) => value.length <= max ? value : previousValue

const NewPlayerModal = props => {
  const { onSave, onRequestClose, handleSubmit, pristine, submitting } = props
  return (
    <Modal onRequestClose={onRequestClose}>
      <form onSubmit={handleSubmit(onSave.bind(this))}>
        <Field
          autoFocus
          name='name'
          component='input'
          type='text'
          placeholder='Francesco Totti'
          validate={required}
          normalize={maxLength(30)}
        />
        <Field
          name='number'
          component='input'
          type='number'
          placeholder='Number'
          validate={required}
          normalize={between(1, 99)}
        />
        <button type='submit' disabled={pristine || submitting}>Agregar</button>
      </form>
    </Modal>
  )
}

NewPlayerModal.propTypes = {
  onSave: PropTypes.func.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool
}

export default reduxForm({
  form: 'new-player-modal'
})(NewPlayerModal)
