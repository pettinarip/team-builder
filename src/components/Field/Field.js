import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../Layout'

const Field = ({ layout, playersPositions }) => {
  return (
    <div className='field'>
      {layout && <Layout config={layout.config} playersPositions={playersPositions} />}
    </div>
  )
}

Field.propTypes = {
  layout: PropTypes.object,
  playersPositions: PropTypes.object
}

export default Field
