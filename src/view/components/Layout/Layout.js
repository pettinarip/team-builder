import React,{ Component } from 'react'
import PropTypes from 'prop-types'
import { findDOMNode } from 'react-dom'
import Player from '../Player'
import Position from '../Position'

import ItemTypes from 'core/constants/ItemTypes'

import { DropTarget } from 'react-dnd'

class Layout extends Component {
  render () {
    const { config, playersPositions, connectDropTarget, readOnly } = this.props
    const players = config.map((position, i) => ({
        ...playersPositions[i],
        ...position
      })
    )

    return connectDropTarget(
      <div className='layout'>
        {players.map((player, i) => (
            <Position
              id={i}
              key={i}
              x={player.x}
              y={player.y}
            >
              <Player
                className={player.id ? 'active' : ''}
                number={player.number}
                key={player.position}
              />
            </Position>
          )
        )}
      </div>
    )
  }
}

Layout.propTypes = {
  config: PropTypes.array,
  playersPositions: PropTypes.object,
  updatePosition: PropTypes.func.isRequired,
  readOnly: PropTypes.bool
}

export default DropTarget(ItemTypes.POSITION, {
  drop (props, monitor, component) {
    const dragItem = monitor.getItem()
    const fieldBoundingRect = findDOMNode(component).getBoundingClientRect()
    const sourceOffset = monitor.getSourceClientOffset()

    const x = sourceOffset.x - fieldBoundingRect.left
    const y = sourceOffset.y - fieldBoundingRect.top

    props.updatePosition(
      dragItem.position,
      x / fieldBoundingRect.width * 100,
      y / fieldBoundingRect.height * 100
    )
  }
},
function (connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  }
})(Layout)
