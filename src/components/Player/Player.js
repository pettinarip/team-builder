import React from 'react'
import PropTypes from 'prop-types'

const Player = ({ name, icon, number }) => {
  return (
    <div className='player'>
      <div className='player-icon'>{number}</div>
      <div className='player-name'>{name}</div>
    </div>
  )
}

Player.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.string,
  number: PropTypes.string
}

export default Player
