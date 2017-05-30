import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import * as actions from 'core/auth/actions'

import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

import FieldContainer from 'view/containers/FieldContainer'
import LayoutSelectorContainer from 'view/containers/LayoutSelectorContainer'
import PlayerContainer from 'view/containers/PlayerContainer'

import SportSelector from 'view/components/SportSelector'

let Builder = ({ signOut }) => (
  <section className='main container'>
    <div className='main__settings'>
      <SportSelector />
      <LayoutSelectorContainer />
      <PlayerContainer />
    </div>
    <div className='main__field'>
      <FieldContainer />
    </div>
  </section>
)

Builder.propTypes = {
  signOut: PropTypes.func.isRequired
}

Builder = DragDropContext(HTML5Backend)(Builder)

export default connect(
  null,
  actions
)(Builder)
