import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { positionsActions } from 'core/positions'
import { getActiveLayout, getPlayersByPosition } from 'core/selectors'

import Field from 'view/components/Field'

const FieldContainer = props => {
  const {
    layout,
    playersPositions,
    updatePosition,
    switchPosition,
    match
  } = props
  const shareCode = match.params.shareCode
  return (
    <div className='layout-wrapper'>
      <Field
        layout={layout}
        playersPositions={playersPositions}
        updatePosition={updatePosition}
        switchPosition={switchPosition}
        readOnly={shareCode !== undefined}
      />
    </div>
  )
}

FieldContainer.propTypes = {
  layout: PropTypes.object,
  playersPositions: PropTypes.object,
  updatePosition: PropTypes.func.isRequired,
  switchPosition: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  layout: getActiveLayout(state),
  playersPositions: getPlayersByPosition(state)
})

export default withRouter(
  connect(
    mapStateToProps,
    positionsActions
  )(FieldContainer)
)
