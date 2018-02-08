import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../Layout'
import PositionLayer from '../PositionLayer'

const Field = ({ layout, playersPositions, updatePosition, switchPosition }) => {
  return (
    <div className='field'>
      {layout &&
        <Layout
          config={layout.config}
          playersPositions={playersPositions}
          updatePosition={updatePosition}
          switchPosition={switchPosition}
        />}
      <PositionLayer />
    </div>
  )
}

Field.propTypes = {
  layout: PropTypes.object,
  playersPositions: PropTypes.object,
  updatePosition: PropTypes.func.isRequired,
  switchPosition: PropTypes.func.isRequired
}

export default Field
