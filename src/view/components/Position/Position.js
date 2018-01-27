import React from 'react'
import PropTypes from 'prop-types'

import { DropTarget } from 'react-dnd'

import ItemTypes from 'core/constants/ItemTypes'

const positionTarget = {
  drop (props) {
    return {
      position: props.id
    }
  }
}

function collect (connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  }
}

const Position = ({ children, x, y, connectDropTarget }) => {
  return connectDropTarget(
    <div className='position' style={{ left: `${x}%`, bottom: `${y}%` }}>
      { children }
    </div>
  )
}

Position.propTypes = {
  children: PropTypes.node,
  id: PropTypes.number,
  x: PropTypes.number,
  y: PropTypes.number
}

export default DropTarget(ItemTypes.PLAYER, positionTarget, collect)(Position)
