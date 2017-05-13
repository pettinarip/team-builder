import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import { getAllPlayers } from '../../reducers'
import PlayerDraggable from '../../components/PlayerDraggable'

const PlayerContainer = ({ players, addPlayer, addPlayerPosition }) => {
  const makeFakePlayer = () => {
    const number = Math.ceil(Math.random() * 100) + 1
    return {
      name: `Player ${number}`,
      number,
      icon: ''
    }
  }

  return (
    <div className='player-selector list-container'>
      <div className='title'>Players</div>
      <div className='subtitle'>
        <div className='player add-player' onClick={() => addPlayer(makeFakePlayer())}>
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
  players: getAllPlayers(state)
})

export default connect(
  mapStateToProps,
  actions
)(PlayerContainer)
