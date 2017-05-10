import React from 'react'
import PropTypes from 'prop-types'

const Player = ({ name, icon, number, color, onClick }) => {
  return (
    <div className='player' onClick={onClick}>
      <div className='player-icon' style={{ backgroundColor: color }}>{number}</div>
      <div className='player-name'>{name}</div>
    </div>
  )
}

Player.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.string,
  number: PropTypes.number,
  color: PropTypes.string,
  onClick: PropTypes.func
}

export default Player
