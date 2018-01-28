import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../Layout'

const Field = ({ layout, playersPositions, updatePosition, readOnly }) => {
  return (
    <div className='field'>
      {layout &&
        <Layout
          config={layout.config}
          playersPositions={playersPositions}
          updatePosition={updatePosition}
          readOnly={readOnly}
        />}
    </div>
  )
}

Field.propTypes = {
  layout: PropTypes.object,
  playersPositions: PropTypes.object,
  updatePosition: PropTypes.func.isRequired,
  readOnly: PropTypes.bool
}

export default Field
