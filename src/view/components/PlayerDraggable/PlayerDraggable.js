import React from 'react'
import PropTypes from 'prop-types'
import { DragSource } from 'react-dnd'

import ItemTypes from 'core/constants/ItemTypes'
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
      const source = {
        id: props.id,
        position: props.position
      }
      const target = {
        position: dropResult.position
      }
      if (target.position) {
        props.onDropped(source, target)
      } else {
        props.onDroppedOutside(source.id, source.position)
      }
    }
  }
}

function collect (connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

const PlayerDraggable = ({ connectDragSource, className, name, number }) => {
  return connectDragSource(
    <div className={`player ${className}`}>
      <Player className={className} name={name} number={number} />
    </div>
  )
}

PlayerDraggable.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  icon: PropTypes.string,
  number: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  color: PropTypes.string,
  onDropped: PropTypes.func,
  onDroppedOutside: PropTypes.func,
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool
}

export default DragSource(ItemTypes.PLAYER, playerSource, collect)(PlayerDraggable)
