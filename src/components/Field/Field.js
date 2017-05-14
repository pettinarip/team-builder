import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../Layout'

const Field = ({ layout, playersPositions, addPlayer, removePlayer }) => {
  return (
    <div className='field'>
      {layout &&
        <Layout
          config={layout.config}
          playersPositions={playersPositions}
          addPlayer={addPlayer}
          removePlayer={removePlayer}
        />}
    </div>
  )
}

Field.propTypes = {
  layout: PropTypes.object,
  playersPositions: PropTypes.object,
  addPlayer: PropTypes.func.isRequired,
  removePlayer: PropTypes.func.isRequired
}

export default Field
