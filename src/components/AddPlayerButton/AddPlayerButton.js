import React from 'react'
import PropTypes from 'prop-types'

const makeFakePlayer = () => {
  const number = Math.ceil(Math.random() * 100) + 1
  return {
    name: `Player ${number}`,
    number,
    icon: ''
  }
}

const AddPlayerButton = ({ onAddPlayer }) => (
  <div
    className='player add-player'
    title='Add new player'
    onClick={() => onAddPlayer(makeFakePlayer())}
  >
    <div className='player-number'>+</div>
  </div>
)

AddPlayerButton.propTypes = {
  onAddPlayer: PropTypes.func.isRequired
}

export default AddPlayerButton
