import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import { getAllLayouts, getActiveLayout } from '../../reducers'
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
    const { layouts, selected, changeLayoutSelection } = this.props
    return (
      <div className='settings-field-wrapper'>
        <label className='settings-field-heading'>Tactics</label>
        <div className='settings-field'>
          <LayoutSelector
            layouts={layouts}
            selected={selected}
            onLayoutClick={changeLayoutSelection}
          />
        </div>
      </div>
    )
  }
}

LayoutSelectorContainer.propTypes = {
  layouts: PropTypes.array.isRequired,
  selected: PropTypes.object,
  changeLayoutSelection: PropTypes.func.isRequired,
  fetchLayouts: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  layouts: getAllLayouts(state),
  selected: getActiveLayout(state)
})

export default connect(
  mapStateToProps,
  actions
)(LayoutSelectorContainer)
