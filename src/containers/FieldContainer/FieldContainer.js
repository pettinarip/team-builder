import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getActiveLayout, getPlayersByPositions } from '../../reducers'
import Field from '../../components/Field'

const FieldContainer = ({ layout, playersPositions }) => {
  return (
    <div>
      <Field layout={layout} playersPositions={playersPositions} />
    </div>
  )
}

FieldContainer.propTypes = {
  layout: PropTypes.object,
  playersPositions: PropTypes.object
}

const mapStateToProps = (state) => ({
  layout: getActiveLayout(state),
  playersPositions: getPlayersByPositions(state)
})

export default connect(
  mapStateToProps
)(FieldContainer)
