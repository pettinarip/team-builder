import React from 'react'
import PropTypes from 'prop-types'

const AddPlayerButton = ({ onClick }) => (
  <div
    className='player add-player item'
    title='Add new player'
    onClick={onClick}
  >
    <div className='player-number'>+</div>
  </div>
)

AddPlayerButton.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default AddPlayerButton
