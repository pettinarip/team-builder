import React from 'react'
import PropTypes from 'prop-types'
import PlayerDraggable from '../PlayerDraggable'
import AddPlayerButton from '../AddPlayerButton'

const PlayerSelector = ({ players, ...props }) => (
  <div className='list'>
    <AddPlayerButton onClick={props.onAddPlayerClick} />
    {players.map(player =>
      <PlayerDraggable
        className='item active'
        id={player.id}
        color={player.color}
        number={player.number}
        onDropped={props.onAddPlayerPosition}
        onDroppedOutside={props.onRemovePlayerPosition}
        key={player.id}
      />
    )}
  </div>
)

PlayerSelector.propTypes = {
  players: PropTypes.array.isRequired,
  onAddPlayerClick: PropTypes.func.isRequired,
  onAddPlayerPosition: PropTypes.func.isRequired
}

export default PlayerSelector
