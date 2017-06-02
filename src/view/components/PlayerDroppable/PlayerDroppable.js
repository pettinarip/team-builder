import React from 'react'
import PropTypes from 'prop-types'
import { DropTarget } from 'react-dnd'

import ItemTypes from 'core/constants/ItemTypes'
import PlayerDraggable from '../PlayerDraggable'

const playerTarget = {
  drop (props) {
    return {
      position: props.position,
      id: props.id
    }
  }
}

function collect (connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  }
}

const PlayerDroppable = ({ connectDropTarget, addPlayer, removePlayer, ...props }) => {
  return connectDropTarget(
    <div>
      <PlayerDraggable
        {...props}
        onDropped={addPlayer}
        onDroppedOutside={removePlayer}
      />
    </div>
  )
}

PlayerDroppable.propTypes = {
  id: PropTypes.string,
  position: PropTypes.number.isRequired,
  connectDropTarget: PropTypes.func.isRequired,
  isOver: PropTypes.bool.isRequired,
  addPlayer: PropTypes.func.isRequired,
  removePlayer: PropTypes.func.isRequired,
  name: PropTypes.string,
  icon: PropTypes.string,
  number: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  color: PropTypes.string,
  className: PropTypes.string
}

export default DropTarget(ItemTypes.PLAYER, playerTarget, collect)(PlayerDroppable)
