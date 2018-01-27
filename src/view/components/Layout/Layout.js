import React from 'react'
import PropTypes from 'prop-types'
import Player from '../Player'
import Position from '../Position'

const Layout = ({ config, playersPositions, addPlayer, removePlayer, readOnly }) => {
  const players = config.map((position, i) => ({
      ...playersPositions[i],
      position: i,
      ...position
    })
  )

  return (
    <div className='layout'>
      {players.map((player, i) => (
          <Position x={player.x} y={player.y} key={i}>
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

Layout.propTypes = {
  config: PropTypes.array,
  playersPositions: PropTypes.object,
  addPlayer: PropTypes.func.isRequired,
  removePlayer: PropTypes.func.isRequired,
  readOnly: PropTypes.bool
}

export default Layout
