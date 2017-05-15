import React from 'react'
import PropTypes from 'prop-types'

const SettingField = ({ title, children }) => (
  <div className='settings-field-wrapper'>
    <label className='settings-field-heading'>{title}</label>
    <div className='settings-field'>
      {children}
    </div>
  </div>
)

SettingField.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default SettingField
