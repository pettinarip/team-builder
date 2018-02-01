import React from 'react'
import PropTypes from 'prop-types'

const Player = (props) => (
  <div className={`player ${props.className}`} title={props.name}>
    <div className='player-number'>{props.number}</div>
  </div>
)

Player.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ])
}

export default Player
