import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../Layout'

const Field = ({ layout }) => {
  return (
    <div className='field'>
      {layout && <Layout config={layout.config} />}
    </div>
  )
}

Field.propTypes = {
  layout: PropTypes.object
}

export default Field
