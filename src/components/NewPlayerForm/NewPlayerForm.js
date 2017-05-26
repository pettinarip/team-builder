import React from 'react'
import { Field, reduxForm } from 'redux-form'
import PropTypes from 'prop-types'
import SettingField from '../SettingField'

const required = value => (value ? undefined : 'Required')
const between = (min, max) =>
  (value, previousValue) => value <= max && value >= min ? value : previousValue
const maxLength = max =>
  (value, previousValue) => value.length <= max ? value : previousValue

const NewPlayerForm = ({ onSave, handleSubmit, pristine, submitting }) => (
  <form className='form-horizontal' onSubmit={handleSubmit(onSave.bind(this))}>
    <SettingField title='Name'>
      <Field
        autoFocus
        name='name'
        component='input'
        type='text'
        placeholder='Francesco Totti'
        validate={required}
        normalize={maxLength(30)}
      />
    </SettingField>
    <SettingField title='Number'>
      <Field
        name='number'
        component='input'
        type='number'
        placeholder='10'
        validate={required}
        normalize={between(1, 99)}
      />
    </SettingField>
    <SettingField>
      <button className='primary-button' type='submit' disabled={pristine || submitting}>Add to the team</button>
    </SettingField>
  </form>
)

NewPlayerForm.propTypes = {
  onSave: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool
}

export default reduxForm({
  form: 'newPlayer'
})(NewPlayerForm)