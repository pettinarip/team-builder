import React from 'react'
import PropTypes from 'prop-types'
import { DragSource } from 'react-dnd'
import ItemTypes from '../../constants/ItemTypes'
import Player from '../Player'

const playerSource = {
  beginDrag (props) {
    return {
      id: props.id
    }
  },
  endDrag (props, monitor) {
    if (monitor.didDrop()) {
      const dropResult = monitor.getDropResult()
      props.onDropped(props.id, dropResult.position, dropResult.prevId)
    }
  }
}

function collect (connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

const PlayerDraggable = ({ connectDragSource, ...props }) => {
  return connectDragSource(
    <div><Player {...props} /></div>
  )
}

PlayerDraggable.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  icon: PropTypes.string,
  number: PropTypes.number,
  color: PropTypes.string,
  onDropped: PropTypes.func,
  connectDragSource: PropTypes.func,
  isDragging: PropTypes.bool
}

export default DragSource(ItemTypes.PLAYER, playerSource, collect)(PlayerDraggable)
