import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addPlayer, addPlayerPosition } from '../../actions'
import { getPlayers } from '../../reducers/players'
import PlayerDraggable from '../../components/PlayerDraggable'

const PlayerContainer = ({ players, addPlayer, addPlayerPosition }) => {
  return (
    <div className='player-selector list-container'>
      <div className='title'>Players</div>
      <div className='subtitle'>
        <div className='player add-player' onClick={addPlayer}>
          <div className='player-number'>+</div>
        </div>
      </div>
      <div className='list'>
        {players.map(player =>
          <PlayerDraggable
            className='active'
            id={player.id}
            color={player.color}
            number={player.number}
            onDropped={addPlayerPosition}
            key={player.id}
          />
        )}
      </div>
    </div>
  )
}

PlayerContainer.propTypes = {
  players: PropTypes.array,
  addPlayer: PropTypes.func.isRequired,
  addPlayerPosition: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  players: getPlayers(state.players)
})

export default connect(
  mapStateToProps,
  { addPlayer, addPlayerPosition }
)(PlayerContainer)