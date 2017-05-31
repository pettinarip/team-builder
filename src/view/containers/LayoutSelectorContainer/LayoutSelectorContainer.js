import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as actions from 'actions'

import { getLayoutsList, getActiveLayout } from 'core/selectors'

import SettingField from 'view/components/SettingField'
import LayoutSelector from 'view/components/LayoutSelector'

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
      <SettingField title='Tactics'>
        <LayoutSelector
          layouts={layouts}
          selected={selected}
          onLayoutClick={changeLayoutSelection}
        />
      </SettingField>
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
  layouts: getLayoutsList(state),
  selected: getActiveLayout(state)
})

export default connect(
  mapStateToProps,
  actions
)(LayoutSelectorContainer)
