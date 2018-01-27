import React from 'react'
import PropTypes from 'prop-types'

const Position = ({ children, x, y }) => {
  return (
    <div className='position' style={{ left: `${x}%`, bottom: `${y}%` }}>
      { children }
    </div>
  )
}

Position.propTypes = {
  children: PropTypes.node,
  x: PropTypes.number,
  y: PropTypes.number
}

export default Position
