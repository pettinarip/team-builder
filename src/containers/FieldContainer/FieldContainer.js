import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import { getActiveLayout, getPositions } from '../../reducers'
import Field from '../../components/Field'

const FieldContainer = ({ layout, playersPositions, addPlayerPosition, removePlayerPosition }) => {
  return (
    <div className='layout-wrapper'>
      <Field
        layout={layout}
        playersPositions={playersPositions}
        addPlayer={addPlayerPosition}
        removePlayer={removePlayerPosition}
      />
    </div>
  )
}

FieldContainer.propTypes = {
  layout: PropTypes.object,
  playersPositions: PropTypes.object,
  addPlayerPosition: PropTypes.func.isRequired,
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
