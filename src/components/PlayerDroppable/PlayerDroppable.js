import React from 'react'
import PropTypes from 'prop-types'
import { DropTarget } from 'react-dnd'
import ItemTypes from '../../constants/ItemTypes'
import Player from '../Player'

const squareTarget = {
  drop (props) {
    return {
      position: props.position,
      prevId: props.id
    }
  }
}

function collect (connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  }
}

const PlayerDroppable = ({ connectDropTarget, isOver, ...props }) => {
  return connectDropTarget(
    <div><Player {...props} /></div>
  )
}

PlayerDroppable.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  icon: PropTypes.string,
  number: PropTypes.number,
  color: PropTypes.string,
  position: PropTypes.number,
  onClick: PropTypes.func,
  connectDropTarget: PropTypes.func,
  isOver: PropTypes.bool
}

export default DropTarget(ItemTypes.PLAYER, squareTarget, collect)(PlayerDroppable)
