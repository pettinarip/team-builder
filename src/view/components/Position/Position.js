import React from 'react'
import PropTypes from 'prop-types'
import { DropTarget, DragSource } from 'react-dnd'

import ItemTypes from 'core/constants/ItemTypes'

const Position = ({ children, x, y, connectDropTarget, connectDragSource }) => {
  return connectDropTarget(connectDragSource(
    <div className='position' style={{ left: `${x}%`, top: `${y}%` }}>
      { children }
    </div>
  ))
}

Position.propTypes = {
  children: PropTypes.node,
  id: PropTypes.number,
  x: PropTypes.number,
  y: PropTypes.number
}

const DraggablePosition = DragSource(ItemTypes.POSITION, {
  beginDrag (props) {
    return {
      position: props.id
    }
  }
},
function (connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
})(Position)

const DroppablePosition = DropTarget(ItemTypes.PLAYER, {
  drop (props) {
    return {
      position: props.id
    }
  }
},
function (connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  }
})(DraggablePosition)


export default DroppablePosition
