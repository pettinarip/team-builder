import React from 'react'
import PropTypes from 'prop-types'
import { DropTarget } from 'react-dnd'
import ItemTypes from '../../constants/ItemTypes'

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
    <div className={`player ${props.className}`} title={props.name}>
      <div className='player-number'>{props.number}</div>
    </div>
  )
}

PlayerDroppable.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  icon: PropTypes.string,
  number: PropTypes.number,
  color: PropTypes.string,
  position: PropTypes.number,
  connectDropTarget: PropTypes.func,
  isOver: PropTypes.bool
}

export default DropTarget(ItemTypes.PLAYER, squareTarget, collect)(PlayerDroppable)
