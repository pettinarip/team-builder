import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../Layout'

const Field = ({ layout, playersPositions, addPlayer, removePlayer, readOnly }) => {
  return (
    <div className='field'>
      {layout &&
        <Layout
          config={layout.config}
          playersPositions={playersPositions}
          addPlayer={addPlayer}
          removePlayer={removePlayer}
          readOnly={readOnly}
        />}
    </div>
  )
}

Field.propTypes = {
  layout: PropTypes.object,
  playersPositions: PropTypes.object,
  addPlayer: PropTypes.func.isRequired,
  removePlayer: PropTypes.func.isRequired,
  readOnly: PropTypes.bool
}

export default Field
