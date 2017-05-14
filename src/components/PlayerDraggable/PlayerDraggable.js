import React from 'react'
import PropTypes from 'prop-types'
import { DragSource } from 'react-dnd'
import ItemTypes from '../../constants/ItemTypes'

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
        id: dropResult.id,
        position: dropResult.position
      }
      props.onDropped(source, target)
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
    <div className={`player ${props.className}`} title={props.name}>
      <div className='player-number'>{props.number}</div>
    </div>
  )
}

PlayerDraggable.propTypes = {
  className: PropTypes.string,
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
