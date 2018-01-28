import React from 'react'
import PropTypes from 'prop-types'
import { DragLayer } from 'react-dnd'

import ItemTypes from 'core/constants/ItemTypes'
import Player from '../Player'

const layerStyles = {
  position: 'fixed',
  pointerEvents: 'none',
  zIndex: 100,
  left: 0,
  top: 0,
  width: '100%',
  height: '100%'
}

function getItemStyles(props) {
  const { currentOffset } = props
  if (!currentOffset) {
    return {
      display: 'none'
    }
  }

  const { x, y } = currentOffset
  const transform = `translate(${x}px, ${y}px)`
  return {
    transform: transform,
    WebkitTransform: transform
  }
}

class PositionLayer extends React.Component {
  static propTypes = {
    item: PropTypes.object,
    itemType: PropTypes.string,
    currentOffset: PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired
    }),
    isDragging: PropTypes.bool.isRequired
  }

  renderItem(type, item) {
    switch (type) {
      case ItemTypes.PLAYER:
      case ItemTypes.POSITION:
        return (
          <div style={layerStyles}>
            <div style={getItemStyles(this.props)}>
              <Player name={item.name} number={item.number} />
            </div>
          </div>
        )
      default:
        return null
    }
  }

  render() {
    const { item, itemType, isDragging } = this.props
    if (!isDragging) {
      return null
    }

    return this.renderItem(itemType, item)
  }
}

export default DragLayer(monitor => ({
  item: monitor.getItem(),
  itemType: monitor.getItemType(),
  currentOffset: monitor.getSourceClientOffset(),
  isDragging: monitor.isDragging()
}))(PositionLayer)
