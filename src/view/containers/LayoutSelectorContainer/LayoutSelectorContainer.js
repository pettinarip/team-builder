import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { layoutsActions } from 'core/layouts'
import { getLayoutsList, getActiveLayout } from 'core/selectors'

import SettingField from 'view/components/SettingField'
import LayoutSelector from 'view/components/LayoutSelector'

const LayoutSelectorContainer = ({ layouts, selected, changeLayoutSelection }) => (
  <SettingField title='Tactics'>
    <LayoutSelector
      layouts={layouts}
      selected={selected}
      onLayoutClick={changeLayoutSelection}
    />
  </SettingField>
)

LayoutSelectorContainer.propTypes = {
  layouts: PropTypes.array.isRequired,
  selected: PropTypes.object,
  changeLayoutSelection: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  layouts: getLayoutsList(state),
  selected: getActiveLayout(state)
})

export default connect(
  mapStateToProps,
  layoutsActions
)(LayoutSelectorContainer)
