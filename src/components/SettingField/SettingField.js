import React from 'react'
import PropTypes from 'prop-types'

const SettingField = ({ title, children }) => (
  <div className={title ? 'settings-field-wrapper label-pad' : 'settings-field-wrapper'}>
    {title && <label className='settings-field-heading'>{title}</label>}
    <div className='settings-field'>
      {children}
    </div>
  </div>
)

SettingField.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default SettingField
