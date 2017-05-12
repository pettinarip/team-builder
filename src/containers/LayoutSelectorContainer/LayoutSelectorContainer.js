import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import { getAllLayouts } from '../../reducers'
import LayoutSelector from '../../components/LayoutSelector'

class LayoutSelectorContainer extends Component {
  componentDidMount () {
    this.fetchData()
  }

  fetchData () {
    const { fetchLayouts } = this.props
    fetchLayouts()
  }

  render () {
    const { layouts, changeLayoutSelection } = this.props
    return (
      <LayoutSelector
        layouts={layouts}
        onLayoutClick={changeLayoutSelection}
      />
    )
  }
}

LayoutSelectorContainer.propTypes = {
  layouts: PropTypes.array.isRequired,
  changeLayoutSelection: PropTypes.func.isRequired,
  fetchLayouts: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  layouts: getAllLayouts(state)
})

export default connect(
  mapStateToProps,
  actions
)(LayoutSelectorContainer)
