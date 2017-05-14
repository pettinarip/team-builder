import React from 'react'
import PropTypes from 'prop-types'
import { DropTarget } from 'react-dnd'
import ItemTypes from '../../constants/ItemTypes'
import PlayerDraggable from '../PlayerDraggable'

const squareTarget = {
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

const PlayerDroppable = ({ connectDropTarget, addPlayer, onClick, ...props }) => {
  return connectDropTarget(
    <div><PlayerDraggable {...props} onDropped={addPlayer} /></div>
  )
}

PlayerDroppable.propTypes = {
  id: PropTypes.string,
  position: PropTypes.number.isRequired,
  connectDropTarget: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  isOver: PropTypes.bool.isRequired,
  addPlayer: PropTypes.func.isRequired,
  name: PropTypes.string,
  icon: PropTypes.string,
  number: PropTypes.number,
  color: PropTypes.string,
  className: PropTypes.string
}

export default DropTarget(ItemTypes.PLAYER, squareTarget, collect)(PlayerDroppable)
