import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { positionsActions } from 'core/positions'
import { getActiveLayout, getPlayersByPosition } from 'core/selectors'

import Field from 'view/components/Field'

const FieldContainer = props => {
  const { layout, playersPositions, addPlayerPosition, removePlayerPosition } = props
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
  playersPositions: getPlayersByPosition(state)
})

export default connect(
  mapStateToProps,
  positionsActions
)(FieldContainer)
