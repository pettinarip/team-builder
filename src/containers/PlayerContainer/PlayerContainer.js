import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { DropTarget } from 'react-dnd'
import ItemTypes from '../../constants/ItemTypes'
import * as actions from '../../actions'
import { getInactivePlayers } from '../../reducers'
import SettingField from '../../components/SettingField'
import PlayerDraggable from '../../components/PlayerDraggable'

function collect (connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  }
}

const PlayerContainer = ({ players, addPlayer, connectDropTarget, ...props }) => {
  const makeFakePlayer = () => {
    const number = Math.ceil(Math.random() * 100) + 1
    return {
      name: `Player ${number}`,
      number,
      icon: ''
    }
  }

  return connectDropTarget(
    <div>
      <SettingField title='Player'>
        <div className='list'>
          <div
            className='player add-player'
            title='Add new player'
            onClick={() => addPlayer(makeFakePlayer())}
          >
            <div className='player-number'>+</div>
          </div>
          {players.map(player =>
            <PlayerDraggable
              className='item active'
              id={player.id}
              color={player.color}
              number={player.number}
              onDropped={props.addPlayerPosition}
              onDroppedOutside={props.removePlayerPosition}
              key={player.id}
            />
          )}
        </div>
      </SettingField>
    </div>
  )
}

PlayerContainer.propTypes = {
  players: PropTypes.array,
  addPlayer: PropTypes.func.isRequired,
  addPlayerPosition: PropTypes.func.isRequired,
  removePlayerPosition: PropTypes.func.isRequired,
  connectDropTarget: PropTypes.func.isRequired,
  isOver: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => ({
  players: getInactivePlayers(state)
})

export default connect(
  mapStateToProps,
  actions
)(DropTarget(ItemTypes.PLAYER, {}, collect)(PlayerContainer))
