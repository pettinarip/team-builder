import React from 'react'
import PropTypes from 'prop-types'

const LayoutSelector = ({ children }) => {
  return (
    <div className='layout-selector'>
      {children}
    </div>
  )
}

LayoutSelector.propTypes = {
  children: PropTypes.node
}

export default LayoutSelector
