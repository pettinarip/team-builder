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

const PlayerDroppable = ({ connectDropTarget, isOver, onClick, ...props }) => {
  return connectDropTarget(
    <div
      className={`player ${props.className}`}
      title={props.name}
      onClick={() => onClick(props.id)}
    >
      <div className='player-number'>{props.number}</div>
    </div>
  )
}

PlayerDroppable.propTypes = {
  id: PropTypes.string,
  position: PropTypes.number.isRequired,
  connectDropTarget: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  isOver: PropTypes.bool.isRequired,
  name: PropTypes.string,
  icon: PropTypes.string,
  number: PropTypes.number,
  color: PropTypes.string,
  className: PropTypes.string
}

export default DropTarget(ItemTypes.PLAYER, squareTarget, collect)(PlayerDroppable)
