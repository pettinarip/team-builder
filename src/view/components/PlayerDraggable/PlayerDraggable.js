import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DragSource } from 'react-dnd'
import { getEmptyImage } from 'react-dnd-html5-backend'

import ItemTypes from 'core/constants/ItemTypes'
import Player from '../Player'

const playerSource = {
  beginDrag (props) {
    return {
      id: props.id,
      name: props.name,
      number: props.number
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
      if (typeof target.position === 'number') {
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
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  }
}

function getStyles(props) {
	const { isDragging } = props

	return {
		// IE fallback: hide the real node using CSS when dragging
		// because IE will ignore our custom "empty image" drag preview.
		opacity: isDragging ? 0 : 1,
		height: isDragging ? 0 : ''
	}
}

class PlayerDraggable extends Component {
  componentDidMount() {
		this.props.connectDragPreview(getEmptyImage(), {
			// IE fallback: specify that we'd rather screenshot the node
			// when it already knows it's being dragged so we can hide it with CSS.
			captureDraggingState: true
		})
	}

  render () {
    const { connectDragSource, className, name, number, id } = this.props
    
    return connectDragSource(
      <div className={`player ${className}`} style={getStyles(this.props)}>
        <Player id={id} className={className} name={name} number={number} />
      </div>
    )
  }
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
