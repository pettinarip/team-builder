import React from 'react'
import PropTypes from 'prop-types'

const Toolbar = ({ children }) => (
  <section className='toolbar'>
    { children }
  </section>
)

Toolbar.propTypes = {
  children: PropTypes.element
}

export default Toolbar
