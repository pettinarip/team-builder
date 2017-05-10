import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getActiveLayout } from '../../reducers'
import Field from '../../components/Field'

const FieldContainer = ({ layout }) => {
  return (
    <div>
      <Field layout={layout} />
    </div>
  )
}

FieldContainer.propTypes = {
  layout: PropTypes.object
}

const mapStateToProps = (state) => ({
  layout: getActiveLayout(state)
})

export default connect(
  mapStateToProps
)(FieldContainer)
