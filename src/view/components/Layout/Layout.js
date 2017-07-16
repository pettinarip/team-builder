import React from 'react'
import PropTypes from 'prop-types'
import PlayerDroppable from '../PlayerDroppable'
import Player from '../Player'

const Layout = ({ config, playersPositions, addPlayer, removePlayer, readOnly }) => {
  let index = 0
  const players = config.map(lineCount => {
    const slice = Array.apply(null, Array(lineCount)).map(
      (x, i) => ({
        ...playersPositions[index + i],
        position: index + i
      })
    )
    index += lineCount
    return slice
  })

  return (
    <div className='layout'>
      {players.reverse().map((line, i) =>
        <div className='line' key={i}>
          {line.map(player =>
            readOnly
            ? <Player
              className={player.id ? 'active' : ''}
              number={player.number}
              key={player.position}
            />
            : <PlayerDroppable
              className={player.id ? 'active' : ''}
              id={player.id}
              color={player.color}
              number={player.number}
              position={player.position}
              key={player.position}
              addPlayer={addPlayer}
              removePlayer={removePlayer}
            />
          )}
        </div>
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
