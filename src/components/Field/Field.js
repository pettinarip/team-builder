import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../Layout'

const Field = ({ layout, playersPositions, removePlayer }) => {
  return (
    <div className='field'>
      {layout &&
        <Layout
          config={layout.config}
          playersPositions={playersPositions}
          removePlayer={removePlayer}
        />}
    </div>
  )
}

Field.propTypes = {
  layout: PropTypes.object,
  playersPositions: PropTypes.object,
  removePlayer: PropTypes.func.isRequired
}

export default Field
