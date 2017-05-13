import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import { getActiveLayout, getPositions } from '../../reducers'
import Field from '../../components/Field'

const FieldContainer = ({ layout, playersPositions, removePlayerPosition }) => {
  return (
    <div>
      <Field
        layout={layout}
        playersPositions={playersPositions}
        removePlayer={removePlayerPosition}
      />
    </div>
  )
}

FieldContainer.propTypes = {
  layout: PropTypes.object,
  playersPositions: PropTypes.object,
  removePlayerPosition: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  layout: getActiveLayout(state),
  playersPositions: getPositions(state)
})

export default connect(
  mapStateToProps,
  actions
)(FieldContainer)
