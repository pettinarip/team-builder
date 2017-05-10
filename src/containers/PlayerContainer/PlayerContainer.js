import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addPlayer, addPlayerPosition } from '../../actions'
import { getPlayers } from '../../reducers/players'
import PlayerDraggable from '../../components/PlayerDraggable'

const PlayerContainer = ({ players, addPlayer, addPlayerPosition }) => {
  return (
    <div className='player-selector'>
      <button type='button' onClick={addPlayer}>Add player</button>
      {players.map(player =>
        <PlayerDraggable
          id={player.id}
          color={player.color}
          number={player.number}
          onDropped={addPlayerPosition}
          key={player.id}
        />
      )}
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
