import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DropTarget, DragSource } from 'react-dnd'
import { getEmptyImage } from 'react-dnd-html5-backend'

import ItemTypes from 'core/constants/ItemTypes'

function getItemStyles(props) {
  const { x, y, isDragging } = props

	return {
    left: `${x}%`,
    top: `${y}%`,
		// IE fallback: hide the real node using CSS when dragging
		// because IE will ignore our custom "empty image" drag preview.
		opacity: isDragging ? 0 : 1,
		height: isDragging ? 0 : ''
	}
}

class Position extends Component {
  componentDidMount() {
		this.props.connectDragPreview(getEmptyImage(), {
			// IE fallback: specify that we'd rather screenshot the node
			// when it already knows it's being dragged so we can hide it with CSS.
			captureDraggingState: true
		})
  }
  
  render () {
    const { children, x, y, connectDropTarget, connectDragSource } = this.props

    return connectDropTarget(connectDragSource(
      <div className='position' style={getItemStyles(this.props)}>
        { children }
      </div>
    ))
  }
}

Position.propTypes = {
  children: PropTypes.node,
  id: PropTypes.number,
  x: PropTypes.number,
  y: PropTypes.number,
  isDragging: PropTypes.bool.isRequired,
  connectDragSource: PropTypes.func.isRequired,
  connectDropTarget: PropTypes.func.isRequired,
  connectDragPreview: PropTypes.func.isRequired,
  onDropped: PropTypes.func.isRequired
}

const DraggablePosition = DragSource(ItemTypes.POSITION, {
  beginDrag (props) {
    return {
      position: props.id,
      ...props.children.props
    }
  },
  endDrag (props, monitor) {
    if (monitor.didDrop()) {
      const item = monitor.getItem()
      const dropResult = monitor.getDropResult()
      props.onDropped(item.position, dropResult.position)
    }
  }
},
function (connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  }
})(Position)

const DroppablePosition = DropTarget([ItemTypes.PLAYER, ItemTypes.POSITION], {
  drop (props, monitor) {
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
